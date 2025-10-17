export const runCode = async (sourceCode: string, languageId: number): Promise<string> => {

  if (languageId === 62) {
  const cleanedCode = sourceCode
    .split('\n')
    .filter(line => !line.trim().startsWith('//'))
    .join('\n');

  if (!/class\s+\w+/.test(cleanedCode)) {
    sourceCode = `
public class Main {
    public static void main(String[] args) {
        ${cleanedCode}
    }
}`;
  }
}

  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "API KEY NYO!!",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    body: JSON.stringify({
      source_code: sourceCode,
      language_id: languageId,
    }),
  });

  const data = await response.json();
  console.log("JUDGE0 RAW:", data);
  
  // Check for compilation/runtime errors first
  if (data.compile_output) {
    console.log("❌ Compilation Error:", data.compile_output);
    return data.compile_output;
  }
  
  if (data.stderr) {
    console.log("❌ Runtime Error:", data.stderr);
    return data.stderr;
  }
  
  if (data.status && data.status.id > 3) {
    console.log("❌ Judge0 Error Status:", data.status.description);
    return data.status.description || "Execution failed";
  }
  
  // Return stdout if successful
  return data.stdout || "No output.";
};