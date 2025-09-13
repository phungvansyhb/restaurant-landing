# 🏷️ JSON-LD Structured Data cho Nhà hàng

## 🎯 JSON-LD là gì?

**JSON-LD (JSON for Linking Data)** là một định dạng structured data giúp search engines hiểu nội dung website tốt hơn.

### ✨ **Lợi ích:**

-   🔍 **Rich Snippets**: Hiển thị đẹp hơn trên Google
-   📈 **SEO tốt hơn**: Google hiểu website rõ ràng
-   🎯 **Local SEO**: Tăng visibility cho địa phương
-   ⭐ **Review Stars**: Hiển thị rating trên SERP
-   📱 **Voice Search**: Hỗ trợ tìm kiếm bằng giọng nói

## 📊 Schema Types được sử dụng

### 1. **Restaurant Schema**

```json
"@type": "Restaurant"
```

**Mục đích**: Định nghĩa thông tin cơ bản nhà hàng

**Rich Snippets sẽ hiển thị:**

-   ⏰ Giờ mở cửa
-   📞 Số điện thoại
-   📍 Địa chỉ
-   ⭐ Rating & Reviews
-   💰 Price range
-   🍽️ Cuisine type

### 2. **LocalBusiness Schema**

```json
"@type": "LocalBusiness"
```

**Mục đích**: Tối ưu Local SEO

**Google Maps sẽ hiển thị:**

-   📍 Vị trí chính xác
-   🕐 Business hours
-   📞 Contact info
-   🚗 Directions

### 3. **Menu Schema**

```json
"@type": "Menu"
```

**Mục đích**: Hiển thị thực đơn trên search

**Rich Snippets sẽ có:**

-   🍽️ Menu items
-   💰 Prices
-   🖼️ Food images
-   📝 Descriptions

### 4. **Organization Schema**

```json
"@type": "Organization"
```

**Mục đích**: Branding và trust signals

**Knowledge Panel sẽ hiển thị:**

-   🏢 Company info
-   🌐 Official website
-   📱 Social media links
-   📧 Contact details

### 5. **WebSite Schema**

```json
"@type": "WebSite"
```

**Mục đích**: Search functionality

**Google sẽ hiển thị:**

-   🔍 Site search box
-   🏠 Homepage link
-   🌐 Language info

### 6. **BreadcrumbList Schema**

```json
"@type": "BreadcrumbList"
```

**Mục đích**: Navigation structure

**SERP sẽ hiển thị:**

-   🧭 Navigation path
-   📍 Current page location
-   🔗 Quick navigation links

## 🎨 Rich Snippets Preview

### 🔍 **Google Search Results:**

```
🌟🌟🌟🌟⭐ 4.5 ⭐ 128 reviews
Nhà Hàng Lán Kiên - Ẩm thực Cao Nguyên
📍 Ngã 3 Phố Bờ hồ, Bắc Hà, Lào Cai
📞 0984 350 229 | 💰 $$ | 🍽️ Vietnamese Cuisine
⏰ Open: 6:00 AM - 10:00 PM | 🏠 Dine-in | 🚗 Parking

Khám phá tinh hoa ẩm thực vùng cao tại nhà hàng Lán Kiên...
```

### 📱 **Mobile Rich Results:**

```
Nhà Hàng Lán Kiên ⭐ 4.5
📍 12 km • Vietnamese Restaurant
⏰ Open until 10:00 PM
📞 Call | 🧭 Directions | 🌐 Website
```

### 🗺️ **Google Maps:**

```
📍 Nhà Hàng Lán Kiên
🌟 4.5 ⭐ (128) • Vietnamese restaurant
📍 Ngã 3 Phố Bờ hồ, Bắc Hà
⏰ Open ⋅ Closes 10:00 PM
📞 0984 350 229
💰 Price: $$
```

## 🛠️ Implementation Details

### 📁 **File Structure:**

```
app/
├── lib/
│   └── json-ld.tsx          # Schema definitions
├── layout.tsx               # Global schemas
└── (clientpage)/
    └── thuc-don/
        └── page.tsx         # Menu-specific schema
```

### 🔧 **Implementation:**

#### 1. **Global Schemas** (layout.tsx)

```tsx
import { JsonLd, restaurantJsonLd, breadcrumbJsonLd } from './lib/json-ld';

// In <head>
<JsonLd data={restaurantJsonLd} />
<JsonLd data={breadcrumbJsonLd} />
```

#### 2. **Page-specific Schemas** (thuc-don/page.tsx)

```tsx
import { JsonLd, menuJsonLd } from '@/app/lib/json-ld';

// In component return
<JsonLd data={menuJsonLd} />;
```

### 📊 **Schema Properties:**

#### 🏪 **Restaurant Schema Properties:**

-   `name`: Tên nhà hàng
-   `description`: Mô tả ngắn gọn
-   `address`: Địa chỉ đầy đủ
-   `telephone`: Số điện thoại
-   `email`: Email liên hệ
-   `openingHours`: Giờ mở cửa
-   `servesCuisine`: Loại ẩm thực
-   `priceRange`: Mức giá ($$)
-   `acceptsReservations`: Nhận đặt bàn
-   `hasMenu`: Link thực đơn
-   `aggregateRating`: Đánh giá trung bình
-   `review`: Reviews của khách hàng

#### 🍽️ **Menu Schema Properties:**

-   `hasMenuSection`: Các phần thực đơn
-   `hasMenuItem`: Món ăn trong từng phần
-   `name`: Tên món
-   `description`: Mô tả món
-   `image`: Hình ảnh món ăn
-   `offers.price`: Giá tiền
-   `offers.priceCurrency`: Đơn vị tiền tệ

## 🚀 SEO Benefits

### 📈 **Search Rankings:**

-   ✅ **Better Click-through Rate**: Rich snippets thu hút clicks
-   ✅ **Featured Snippets**: Chance xuất hiện position 0
-   ✅ **Local Pack**: Hiển thị trong local search results
-   ✅ **Knowledge Panel**: Brand visibility tăng cao

### 🎯 **Local SEO:**

-   ✅ **"Near me" searches**: Hiển thị khi tìm "nhà hàng gần đây"
-   ✅ **Google Maps**: Tích hợp hoàn hảo với Maps
-   ✅ **Voice Search**: "OK Google, tìm nhà hàng ở Bắc Hà"
-   ✅ **Mobile First**: Tối ưu cho mobile search

### 🔍 **Search Features:**

-   ✅ **Site Search**: Google hiển thị search box
-   ✅ **Quick Actions**: Call, Directions buttons
-   ✅ **Rich Cards**: Visual food cards
-   ✅ **Recipe Cards**: Món ăn với hình ảnh và giá

## 🧪 Testing & Validation

### 🛠️ **Google Tools:**

#### 1. **Rich Results Test:**

```
https://search.google.com/test/rich-results
```

-   Paste URL website
-   Check structured data validity
-   Preview rich snippets

#### 2. **Schema Markup Validator:**

```
https://validator.schema.org/
```

-   Validate JSON-LD syntax
-   Check schema compliance
-   Identify errors

#### 3. **Google Search Console:**

```
Search Console > Enhancements
```

-   Monitor rich results performance
-   Check for structured data errors
-   Track impressions & clicks

### 📊 **Manual Testing:**

#### Search Queries to Test:

```
🔍 "nhà hàng ở Bắc Hà"
🔍 "nhà hàng Lán Kiên"
🔍 "ẩm thực Bắc Hà"
🔍 "thắng cố ở đâu ngon"
🔍 "restaurant near me" (khi ở Bắc Hà)
```

#### Expected Results:

-   ⭐ Star ratings visible
-   📞 Phone number clickable
-   🕐 Opening hours displayed
-   📍 Address with map link
-   💰 Price range indicator

## 📝 Maintenance

### 🔄 **Regular Updates:**

#### Monthly:

-   ✅ Update `aggregateRating` với reviews mới
-   ✅ Add new `review` entries
-   ✅ Update `hasMenuItem` khi có món mới

#### Quarterly:

-   ✅ Review `openingHours` cho holidays
-   ✅ Update `priceRange` nếu thay đổi giá
-   ✅ Refresh `image` URLs

#### Annually:

-   ✅ Update `description` cho SEO
-   ✅ Review all contact information
-   ✅ Add new `amenityFeature` nếu có

### 🎯 **Performance Monitoring:**

#### Key Metrics:

-   📊 **Rich Results CTR**: Click-through rate từ rich snippets
-   📈 **Local Search Impressions**: Hiển thị trong local search
-   🎯 **"Near me" Rankings**: Vị trí cho local queries
-   ⭐ **Knowledge Panel Appearances**: Brand visibility

## 🚀 Future Enhancements

### 🔮 **Advanced Schemas:**

#### 1. **Event Schema** (cho special events):

```json
"@type": "Event"
// Cho live music, special dinners
```

#### 2. **Offer Schema** (cho promotions):

```json
"@type": "Offer"
// Combo deals, discounts
```

#### 3. **Recipe Schema** (cho signature dishes):

```json
"@type": "Recipe"
// Cooking instructions, ingredients
```

#### 4. **Review Schema** (detailed reviews):

```json
"@type": "Review"
// Customer testimonials với photos
```

## ✅ Checklist Implementation

### ✅ **Completed:**

-   [x] Restaurant Schema
-   [x] LocalBusiness Schema
-   [x] Menu Schema
-   [x] Organization Schema
-   [x] WebSite Schema
-   [x] BreadcrumbList Schema
-   [x] JSON-LD Component
-   [x] Global implementation
-   [x] Menu page implementation

### 🔄 **TODO:**

-   [ ] Add more detailed reviews
-   [ ] Implement Event schema for special occasions
-   [ ] Add Recipe schema for signature dishes
-   [ ] Set up Google My Business integration
-   [ ] Monitor performance in Search Console

**➡️ Website đã sẵn sàng cho Rich Snippets và Local SEO! 🎉**
