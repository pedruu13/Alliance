using System;
using System.Diagnostics;
using System.IO;

class Program {
    static void Main(string[] args) {
        string appDir = AppDomain.CurrentDomain.BaseDirectory;
        string electronPath = Path.Combine(appDir, "node_modules", "electron", "dist", "electron.exe");
        
        if (!File.Exists(electronPath)) {
            Console.WriteLine("Arquivo base não encontrado. Verifique a instalação.");
            return;
        }

        ProcessStartInfo psi = new ProcessStartInfo();
        psi.FileName = electronPath;
        // The argument should just be the directory containing package.json/main.js
        psi.Arguments = "\"" + appDir.TrimEnd('\\') + "\"";
        psi.UseShellExecute = false;
        psi.CreateNoWindow = true;
        
        Process.Start(psi);
    }
}
