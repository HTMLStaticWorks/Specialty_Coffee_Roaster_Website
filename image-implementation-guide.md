# Coffee Shop & Roastery - Image Implementation Guide

## Current Image Placeholders and Their Replacements

### 1. Hero Background Images
**Files:** index.html, about.html, menu.html, contact.html, gallery.html, blog.html, home2.html

**Current CSS:**
```css
.hero {
    background: linear-gradient(135deg, rgba(44,24,16,0.92), rgba(74,44,26,0.92)),
                url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop&auto=format') center/cover;
}
```

**Replace with:** `images/hero/coffee-hero-bg.jpg`

### 2. Card Images (CSS Classes)

#### Coffee Products:
- `.card-image.coffee-beans` → `images/products/coffee-beans.jpg`
- `.card-image.coffee-cup` → `images/products/coffee-cup.jpg`
- `.card-image.espresso` → `images/products/espresso.jpg`
- `.card-image.latte` → `images/products/latte.jpg`
- `.card-image.cappuccino` → `images/products/cappuccino.jpg`
- `.card-image.americano` → `images/products/americano.jpg`
- `.card-image.mocha` → `images/products/mocha.jpg`
- `.card-image.cold-brew` → `images/products/cold-brew.jpg`
- `.card-image.iced-latte` → `images/products/iced-latte.jpg`
- `.card-image.iced-mocha` → `images/products/iced-mocha.jpg`
- `.card-image.nitro` → `images/products/nitro.jpg`
- `.card-image.frappe` → `images/products/frappe.jpg`

#### Bakery Items:
- `.card-image.croissant` → `images/bakery/croissant.jpg`
- `.card-image.muffin` → `images/bakery/muffin.jpg`
- `.card-image.cookie` → `images/bakery/cookie.jpg`
- `.card-image.brownie` → `images/bakery/brownie.jpg`
- `.card-image.sandwich` → `images/bakery/sandwich.jpg`

#### Retail Products:
- `.card-image.beans` → `images/retail/coffee-beans-bag.jpg`
- `.card-image.ground` → `images/retail/ground-coffee.jpg`
- `.card-image.equipment` → `images/retail/coffee-equipment.jpg`
- `.card-image.gift` → `images/retail/gift-box.jpg`
- `.card-image.merchandise` → `images/retail/merchandise.jpg`

### 3. Inline Background Images (Menu Page)
**File:** menu.html

**Current inline styles:**
```html
<div class="card-image" style="background: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&auto=format') center/cover;"></div>
```

**Replace all with corresponding local paths.**

### 4. Contact Page Icons
**File:** contact.html

**Current emoji icons:**
- 🎂 → `images/services/events-catering.jpg`
- 🏢 → `images/services/office-coffee.jpg`
- 🎓 → `images/services/workshops.jpg`

## Directory Structure to Create:
```
images/
├── hero/
│   ├── coffee-hero-bg.jpg
│   └── about-hero-bg.jpg
├── products/
│   ├── coffee-beans.jpg
│   ├── coffee-cup.jpg
│   ├── espresso.jpg
│   ├── latte.jpg
│   ├── cappuccino.jpg
│   ├── americano.jpg
│   ├── mocha.jpg
│   ├── cold-brew.jpg
│   ├── iced-latte.jpg
│   ├── iced-mocha.jpg
│   ├── nitro.jpg
│   └── frappe.jpg
├── bakery/
│   ├── croissant.jpg
│   ├── muffin.jpg
│   ├── cookie.jpg
│   ├── brownie.jpg
│   └── sandwich.jpg
├── retail/
│   ├── coffee-beans-bag.jpg
│   ├── ground-coffee.jpg
│   ├── coffee-equipment.jpg
│   ├── gift-box.jpg
│   └── merchandise.jpg
└── services/
    ├── events-catering.jpg
    ├── office-coffee.jpg
    └── workshops.jpg
```

## CSS Replacements Needed:

### 1. In style.css (around lines 491-533):
Replace all `background-image: url('https://images.unsplash.com/...')` with local paths.

### 2. In style.css (around lines 803-816):
Replace all `background: url('https://images.unsplash.com/...')` with local paths.

### 3. In style.css (around lines 1457-1533):
Replace all `background: url('https://images.unsplash.com/...')` with local paths.

### 4. In HTML files:
Replace all inline `style="background: url('https://images.unsplash.com/...')"` with local paths.

## Recommended Image Specifications:
- **Hero images:** 1920x1080px (16:9 ratio)
- **Card images:** 400x200px (2:1 ratio)
- **Product images:** Square 400x400px for consistency
- **Format:** JPG for photos, PNG for graphics with transparency

## Implementation Steps:
1. Create the images directory structure
2. Download/place appropriate images in each folder
3. Update CSS file with local paths
4. Update HTML files with local paths
5. Test all pages to ensure images load correctly
