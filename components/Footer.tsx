export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <a 
              href="https://notebooklm.google.com/notebook/25ba3d3b-f6d9-4ec8-a125-994ca371a0c7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
              NotebookLM - Phụ Lục Ứng Dụng AI
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; 2026 Bản quyền thuộc về NewPhilosopher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
