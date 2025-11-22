
export default function handler(req, res) {
    if (req.method === 'POST') {
        const dados = req.body;
        console.log("Webhook recebido:", dados);
        // Aqui você pode enviar os dados para Base44 ou Google Sheets
        res.status(200).json({ message: 'Webhook recebido!' });
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}
