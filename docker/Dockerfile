# استفاده از Python 3.11 به عنوان base image
FROM python:3.11-slim

# تنظیم working directory
WORKDIR /app

# کپی فایل‌های requirements
COPY requirements.txt .

# نصب dependencies
RUN pip install --no-cache-dir -r requirements.txt

# کپی کد backend
COPY backend/ ./backend/

# تنظیم environment variables
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Expose port
EXPOSE 8000

# اجرای application
CMD ["python", "-m", "uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
