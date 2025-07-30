# Deployment Guide for GitHub Pages

## Image Issues Fixed

The following issues have been resolved for GitHub Pages deployment:

### 1. Static Images (Public Folder)
- Fixed image paths in `Aboutus.jsx` and `Home.jsx`
- Images now use absolute paths starting with `/` (e.g., `/computers.jpeg`)
- This ensures images load correctly with the GitHub Pages base path

### 2. API Images (Backend)
- Created environment-based configuration in `src/config/api.js`
- Updated all components to use `getProductImageUrl()` function
- API URLs now work in both development and production

## Deployment Steps

### 1. Update Backend URL
Before deploying, update the production backend URL in `src/config/api.js`:

```javascript
production: {
  // Update this to your actual deployed backend URL
  baseURL: 'https://your-actual-backend-url.com',
}
```

### 2. Build and Deploy
```bash
npm run build
```

### 3. GitHub Pages Configuration
- Repository Settings → Pages
- Source: Deploy from a branch
- Branch: `gh-pages` or `main` (with `/docs` folder)
- Folder: `/docs` or `/root`

### 4. Environment Variables (Optional)
If you want to use environment variables, create a `.env` file:

```env
VITE_BACKEND_URL=https://your-backend-url.com
```

## Files Modified

1. **`src/components/Aboutus.jsx`** - Fixed static image paths
2. **`src/components/Home.jsx`** - Fixed static image paths
3. **`src/components/Computers.jsx`** - Updated to use `getProductImageUrl()`
4. **`src/components/Mobiles.jsx`** - Updated to use `getProductImageUrl()`
5. **`src/components/Laptops.jsx`** - Updated to use `getProductImageUrl()`
6. **`src/components/Pendrives.jsx`** - Updated to use `getProductImageUrl()`
7. **`src/components/ProductPage.jsx`** - Updated to use `getProductImageUrl()`
8. **`src/components/Cart.jsx`** - Updated to use `getProductImageUrl()`
9. **`src/services/productService.js`** - Updated API configuration
10. **`src/config/api.js`** - New configuration file

## Testing

After deployment:
1. Check that static images load correctly (About Us page, Home page)
2. Verify API images load (if backend is deployed)
3. Test all product pages and cart functionality

## Troubleshooting

If images still don't load:
1. Check browser console for 404 errors
2. Verify image files exist in the `public/` folder
3. Ensure backend URL is correct in `src/config/api.js`
4. Check GitHub Pages base path configuration in `vite.config.js` 