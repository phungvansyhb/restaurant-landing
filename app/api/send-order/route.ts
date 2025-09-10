import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import database from '@/app/database.json';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { formData, cart, total } = body;

        // Validate required fields
        if (!formData.customerName || !formData.phoneNumber || !cart.length) {
            return NextResponse.json(
                { error: 'Thiếu thông tin bắt buộc' },
                { status: 400 }
            );
        }

        // Create email transporter (using Gmail as example)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail app password
            },
        });

        // Format cart items for email
        const cartItemsHtml = cart
            .map(
                (item: any) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">
            ${new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                }).format(item.price || 0)}
          </td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">
            ${new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                }).format((item.price || 0) * (item.quantity || 0))}
          </td>
        </tr>
      `
            )
            .join('');

        // Create email content
        const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; text-align: center;">Đơn Đặt Bàn Mới - ${database.restaurant.name}</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Thông tin khách hàng:</h3>
          <p><strong>Họ tên:</strong> ${formData.customerName}</p>
          <p><strong>Số điện thoại:</strong> ${formData.phoneNumber}</p>
          <p><strong>Ngày đặt bàn:</strong> ${formData.reservationDate}</p>
          <p><strong>Giờ đặt bàn:</strong> ${formData.reservationTime}</p>
          <p><strong>Số khách:</strong> ${formData.numberOfCustomers} người</p>
          ${formData.notes ? `<p><strong>Ghi chú:</strong> ${formData.notes}</p>` : ''}
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Chi tiết đơn hàng:</h3>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
            <thead>
              <tr style="background-color: #f8f9fa;">
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: left;">Món ăn</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: center;">Số lượng</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: right;">Đơn giá</th>
                <th style="padding: 12px; border-bottom: 2px solid #ddd; text-align: right;">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
            </tbody>
          </table>
          
          <div style="text-align: right; margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
            <h3 style="color: #333; margin: 0;">
              Tổng cộng: ${new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(total)}
            </h3>
          </div>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
          <p style="margin: 0; color: #333;">
            <strong>Lưu ý:</strong> Đây là đơn đặt bàn tự động từ website. 
            Vui lòng liên hệ với khách hàng để xác nhận đơn hàng.
          </p>
        </div>

        <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
          <p>${database.restaurant.name}</p>
          <p>${database.restaurant.address}</p>
          <p>Tel: ${database.restaurant.phone1} - ${database.restaurant.phone2}</p>
        </div>
      </div>
    `;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: database.restaurant.email, // Send to restaurant email
            subject: `Đơn đặt bàn mới từ ${formData.customerName} - ${database.restaurant.name}`,
            html: emailHtml,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Đơn đặt bàn đã được gửi thành công!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Có lỗi xảy ra khi gửi đơn đặt bàn. Vui lòng thử lại.' },
            { status: 500 }
        );
    }
}
