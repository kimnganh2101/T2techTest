# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


--link git hub
https://github.com/kimnganh2101/T2techTest.git

npm run dev
[localhost](http://localhost:3000/)




trong bài này em đã sử dụng  alt hình ảnh, su dung useHead metatitle kĩ càng theo từng sản phẩm và description để tối ưu SEO tốt hơn

1. Tối ưu SEO cho sản phẩm và danh mục
Tạo URL thân thiện với SEO: Mỗi sản phẩm và danh mục cần có URL ngắn gọn, dễ đọc, và có chứa từ khóa chính. Ví dụ: yenmarket.vn/san-pham/ten-san-pham và yenmarket.vn/danh-muc/san-pham-tet.
Sử dụng Meta Title và Description cho mỗi sản phẩm và danh mục
Tối ưu hóa từ khóa
Sử dụng Schema Markup
2. Tối ưu hiệu suất với nhiều sản phẩm
Lazy loading
Paginate hoặc Infinite Scroll
Sử dụng CDN (Content Delivery Network): Để giảm độ trễ và tăng tốc độ tải trang
Nén hình ảnh: Dùng các công cụ nén hình ảnh như ImageOptim hoặc TinyPN
Caching: Áp dụng caching để lưu trữ các tài nguyên tĩnh
3. Tối ưu cho các trang có nhiều sản phẩm
Công cụ tìm kiếm nâng cao
Lọc và phân loại sản phẩm
Sử dụng phân trang thông minh
Tối ưu hóa bộ lọc AJAX
4. Tối ưu hóa cho tốc độ tải trang
Lazily Load Images
Server-side Rendering (SSR) với Nuxt.j