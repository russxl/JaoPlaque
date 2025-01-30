# Documentation Guidelines

## 📚 Documentation Structure

### 1. Component Documentation
- Location: Component file header (TSX files)
- Required sections:
  ```typescript
  /**
   * Component Name - Brief description
   * 
   * @param {PropType} propName - Description
   * @returns {JSX.Element} 
   * 
   * Features:
   * - List key functionalities
   * - Interaction patterns
   * 
   * Usage Example:
   * ```tsx
   * <ComponentName prop1={value} />
   * ```
   */
  ```

### 2. API Documentation
- For any backend/services:
  ```markdown
  ## API Endpoints
  
  | Method | Route       | Description          | Parameters |
  |--------|-------------|----------------------|------------|
  | GET    | /api/art    | Get artwork list     | `limit: number` |
  ```

### 3. Style Guide
- Use atomic design principles
- Component categories:
  - Atoms: Buttons, Inputs
  - Molecules: Form groups
  - Organisms: Navigation, Gallery sections

## ✍️ Writing Guidelines

### Code Comments
- Use JSDoc for complex functions:
  ```typescript
  /**
   * Formats artwork dimensions for display
   * @param {number} width - Artwork width in cm
   * @param {number} height - Artwork height in cm 
   * @returns {string} Formatted dimensions string
   */
  function formatDimensions(width: number, height: number): string {
    return `${width}x${height} cm`;
  }
  ```

### Visual Documentation
1. Create component stories in `/stories`
2. Add usage examples with different states
3. Include interaction diagrams for complex components

## 🛠 Maintaining Documentation

### Update Triggers
- When adding new components
- Changing prop types
- Introducing new patterns
- Updating dependencies

### Validation Process
1. Documentation review checklist:
   - [ ] All props documented
   - [ ] Usage examples provided
   - [ ] Edge cases noted
2. Run documentation linter:
   ```bash
   npm run lint:docs
   ```

## 🎨 Documentation Style Guide

### Terminology
| Term          | Usage                      |
|---------------|----------------------------|
| Component      | PascalCase (`ImageGallery`)|
| Props         | camelCase (`imageSize`)    |
| Hooks         | `use` prefix (`useGallery`)|

### Visual Hierarchy
```markdown
# Section Title (H1)

## Subsection (H2)

### Component Group (H3)

- **Feature**: Description
  - Sub-feature
  ```tsx
  <CodeExample />
  ```
```

## 🔄 Versioning
- Keep changelog in `/CHANGELOG.md`
- Use semantic versioning:
  ```
  ## [1.2.0] - 2024-02-20
  ### Added
  - New gallery grid component
  ```

## 📚 Recommended Tools
1. TypeDoc - Generate API documentation
2. Storybook - Component playground
3. MermaidJS - Architecture diagrams 