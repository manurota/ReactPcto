import "./Tabella.css"
function Tabella(){
    return(
        <div id="tabella">
            <table>
                <thead>
                    <tr><td>Questo è il titolo</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>R1 C1</td>
                        <td>R1 C2</td>
                    </tr>
                    <tr>
                        <td>R2 C1</td>
                        <td>R2 C2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Tabella