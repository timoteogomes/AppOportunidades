// netlify/functions/saveData.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método não permitido" })
    };
  }

  try {
    const { positions } = JSON.parse(event.body);
    
    // Aqui você pode integrar com um banco de dados real.
    // Por exemplo, conecte-se ao Firebase, MongoDB Atlas, FaunaDB, etc.
    // Neste exemplo, apenas simulamos o salvamento e registramos os dados no console.
    console.log("Dados recebidos:", positions);

    // Simule salvamento e retorne sucesso
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Dados salvos com sucesso!" })
    };
  } catch (error) {
    console.error("Erro:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao processar os dados" })
    };
  }
};
