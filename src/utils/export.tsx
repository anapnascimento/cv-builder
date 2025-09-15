import html2pdf from 'html2pdf.js';

export function exportPDF(elementId: string, fileName = 'meu-curriculo.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Elemento com ID ${elementId} não encontrado.`);
    return;
  }

  const originalClass = element.className;
  const originalStyle = element.getAttribute("style");

  // Aplica estilo para largura total no momento de gerar o PDF
  element.className = '';
  element.setAttribute("style", "width: 100%; padding: 20px; box-sizing: border-box;");

  const options = {
    margin:       0.5,
    filename:     fileName,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf()
    .set(options)
    .from(element)
    .save()
    .then(() => {
      // Volta estilos originais após exportar para pdf
      element.className = originalClass;
      if (originalStyle) {
        element.setAttribute("style", originalStyle);
      } else {
        element.removeAttribute("style");
      }
    });
}
