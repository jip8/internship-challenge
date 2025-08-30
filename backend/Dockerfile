# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Install uv
RUN pip install uv

# Copy the rest of the application's code
COPY . .

# Copy the dependency files
COPY pyproject.toml uv.lock ./

# Install dependencies
RUN uv sync

# Collect static files
RUN /app/.venv/bin/python manage.py collectstatic --noinput

# Expose the port the app runs on
EXPOSE 8000

# Run the application
CMD ["/app/.venv/bin/gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
