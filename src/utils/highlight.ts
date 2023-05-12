import shiki from 'shiki'

shiki
  .getHighlighter({
    theme: 'nord',
  })
  .then((highlighter) => {
    console.log(highlighter.codeToHtml('console.log(\'shiki\');', { lang: 'js' }))
  })

// <pre class="shiki nord" style="background-color: #2e3440"><code>
//   <!-- Highlighted Code -->
// </code></pre>
