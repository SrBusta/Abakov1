import { Bar,Pie,Doughnut} from "react-chartjs-2"


export default function InicioEstadistica() {
    return (<>
        <div>
            <Bar
                data={{
                    labels: ['guitarras', 'pianos', 'baterias'],
                    datasets: [
                        {
                            label: 'Instrumentos',
                            data: [12, 19, 8],
                            backgroundColor: [
                                'rgba(255, 205, 86,0.5)',
                                'rgba(62, 124, 23, 0.4)',
                                'rgba(195, 106, 45, 0.6)'
                            ],
                        },
                    ],
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                }}
            />
        </div>
        
    </>)
}