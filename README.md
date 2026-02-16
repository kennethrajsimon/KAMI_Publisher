# KAMI Content Dashboard

## Run the Backend

From the project root:

```bash
npm install
node server/server.js
```

Backend runs at:
- http://localhost:3001

## Run the Frontend

From the project root:

```bash
npm install
npx vite --config vite.config.ts
```

Frontend runs at:
- http://localhost:3000

## Run Both (Two Terminals)

Terminal 1:

```bash
node server/server.js
```

Terminal 2:

```bash
npx vite --config vite.config.ts
```

## Notes

- Use the project root, not /nextjs-app.
- If ports are in use, stop the existing process or change the port in the respective config.

## Known Limitations

- Images are referenced as URLs (no file upload to server)
- Local storage has size limits (~5-10MB)
- Best viewed in modern browsers with JavaScript enabled

## License

All Rights Reserved © KAMI

## Support

For issues or questions, please refer to the inline code documentation or contact the development team.
