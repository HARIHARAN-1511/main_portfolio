# Deployment Guide

## 1. Push to GitHub

1.  **Create a New Repository**:
    *   Go to [GitHub.com](https://github.com) and sign in.
    *   Click the **+** icon in the top-right and select **New repository**.
    *   Name it (e.g., `my-portfolio`).
    *   **Do NOT** initialize with README, .gitignore, or License (you already have them).
    *   Click **Create repository**.

2.  **Push Your Code**:
    *   Copy the URL of your new repository (e.g., `https://github.com/YOUR_USERNAME/my-portfolio.git`).
    *   Open your terminal in VS Code (Ctrl+`) and run these commands:

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
    git branch -M main
    git push -u origin main
    ```

## 2. Deploy to Vercel (Recommended for Next.js)

1.  **Sign Up / Login**:
    *   Go to [Vercel.com](https://vercel.com) and sign up with **GitHub**.

2.  **Import Project**:
    *   Click **Add New...** -> **Project**.
    *   You should see your `my-portfolio` repository in the list. Click **Import**.

3.  **Configure Environment Variables (Crucial!)**:
    *   In the "Configure Project" screen, look for **Environment Variables**.
    *   You need to add the same variables from your `.env.local` file here:
        *   `EMAIL_USER`: `hariharan151104@gmail.com`
        *   `EMAIL_PASS`: `your-16-char-app-password`
        *   `EMAIL_TO`: `hariharan151104@gmail.com`
        *   `SMTP_HOST`: `smtp.gmail.com`
        *   `SMTP_PORT`: `465`
        *   `SMTP_SECURE`: `true`

4.  **Deploy**:
    *   Click **Deploy**.
    *   Wait a minute, and your site will be live! Vercel will give you a URL (e.g., `my-portfolio.vercel.app`).

## 3. Updating Your Site

Whenever you make changes:
1.  `git add .`
2.  `git commit -m "Description of changes"`
3.  `git push`

Vercel will automatically detect the push and re-deploy your site!
