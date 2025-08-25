import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Plugin } from 'payload'

export const plugins: Plugin[] = [
  payloadCloudPlugin(),
  vercelBlobStorage({
    enabled: true, // Optional, defaults to true
    clientUploads: true,
    // Specify which collections should use Vercel Blob
    collections: {
      media: true,
    },
    // Token provided by Vercel once Blob storage is added to your Vercel project
    token: process.env.BLOB_READ_WRITE_TOKEN,
  }),
]
