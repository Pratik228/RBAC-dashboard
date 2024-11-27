# RBAC Dashboard - VRV Security Assignment

A Role-Based Access Control (RBAC) dashboard built with React and Tailwind CSS, featuring user management, role management, and dynamic permissions.

## Features Implemented

- **User Management**

  - CRUD operations for users
  - Role assignment
  - Status management (Active/Inactive)
  - Bulk actions with pagination
  - Search and filtering

- **Role Management**

  - Role creation and editing
  - Permission assignment
  - Role visualization

- **Permissions System**

  - Dynamic permission matrix
  - Permission inheritance visualization
  - Bulk permission updates

- **Additional Features**
  - Global search
  - Activity monitoring
  - Dark theme
  - Responsive design

## Tech Stack

- React 18
- Tailwind CSS
- shadcn/ui components
- React Router
- Context API for state management

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── modals/
│   └── search/
├── context/
├── pages/
└── utils/
```

## Future Enhancements

1. **Security**

   - Input validation
   - XSS prevention
   - CSRF protection
   - Session management

2. **Features**

   - Role templates
   - Advanced permission groups
   - Audit logging
   - Export/Import functionality
   - User session tracking
   - Two-factor authentication

3. **Performance**

   - API integration
   - Caching strategies
   - Load optimization
   - Real-time updates

4. **UX Improvements**
   - Drag-and-drop interface
   - Bulk operations enhancement
   - Advanced filtering
   - Custom role creation workflow

## Testing

Currently implemented features can be tested:

1. User Management:

   - Search functionality
   - Role/Status filtering
   - Bulk selection and deletion
   - Pagination

2. Role Management:

   - Role creation/editing
   - Permission assignment
   - Role hierarchy viewing

3. Permissions:
   - Matrix view
   - Permission inheritance
   - Permission toggling

## Known Limitations

1. Data persistence (currently using context)
2. No backend integration
3. Limited validation
4. Basic error handling

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request
