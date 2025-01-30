// ### **Pushing to Git and Deploying on Render (Simplified Summary)**

// 1. **Push to Git from VS Code**  
//    - Open your project in VS Code and terminal.

//    - Initialize Git (if not already done):  
//      git init

//    - Add all files:  
//      git add .

//    - Commit changes:  
//      git commit -m "Your commit message"

//    - Link your repository to GitHub (if not linked):  
//      git remote add origin <your-git-repo-url>

// You can chcek status via 
//      git status

//    - Push your code to GitHub:  
//      git push origin main

// 2. **Prepare for Deployment**  
//    - Build the project to generate the `dist` folder:  
//      npm run build

//    - If `dist` is in `.gitignore`, remove it:
//      - Open `.gitignore` and delete or comment out the line with `dist`.

//    - Add, commit, and push the updated files:  
//      git add .
//      git commit -m "Added dist folder for deployment"

// go to git hub repo and check if project is successfully pushed from Vscode to GitHub repository or not. 

// 3. **Deploy on Render**  
//    - Sign in to [Render](https://render.com/).
//    - Click "New +" and select **Web Service** Or Static Site choose.
//    - Connect your **GitHub repository**.

//    - Set build command:  
//       npm run build
//    - Set publish directory:  select dist if you have else some select src (SRC)
//      dist

//    - Click "Create Web Service" to deploy.
//    - Render will automatically deploy whenever you push new changes to GitHub.

// This process ensures your Vite React app is built, pushed, and deployed successfully!

