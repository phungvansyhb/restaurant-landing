'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase/client'
import Image from 'next/image'

export default function ImageUpload({
    onUpload,
    currentUrl
}: {
    onUpload: (url: string) => void,
    currentUrl?: string | null
}) {
    const [uploading, setUploading] = useState(false)
    const supabase = createClient()

    const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `uploads/${fileName}`

            let { error: uploadError } = await supabase.storage
                .from('images')
                .upload(filePath, file)

            if (uploadError) throw uploadError

            const { data } = supabase.storage
                .from('images')
                .getPublicUrl(filePath)

            onUpload(data.publicUrl)
        } catch (error: any) {
            alert(error.message)
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="mt-2">
            {currentUrl ? (
                <div className="mb-4 relative w-40 h-40">
                    <img
                        src={currentUrl}
                        alt="Uploaded preview"
                        className="object-cover rounded-md border"
                    />
                </div>
            ) : null}
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                    </div>
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={uploadImage}
                        disabled={uploading}
                    />
                </label>
            </div>
            {uploading && <p className="text-sm mt-2 text-blue-500">Uploading...</p>}
        </div>
    )
}
