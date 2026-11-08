import { useState } from 'react'
import { Link } from 'react-router'

function PreguntasFrecuentes() {
    const [openQuestion, setOpenQuestion] = useState(null)

    const toggleQuestion = (question) => {
        setOpenQuestion(openQuestion === question ? null : question)
    }

    return (
        <section className="mx-auto my-8 w-full max-w-4xl px-4">
            <h1 className="text-gray-900">Preguntas frecuentes</h1>
            <div className="space-y-2">
                <div className="overflow-hidden rounded border-2 border-gray-500">
                    <h2>
                        <button
                            id="question-account"
                            className={`flex w-full items-center justify-between gap-4 p-4 text-left ${openQuestion === 'account' ? 'bg-gray-600 text-white' : 'bg-gray-50 text-gray-900'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700`}
                            type="button"
                            aria-expanded={openQuestion === 'account'}
                            aria-controls="answer-account"
                            onClick={() => toggleQuestion('account')}
                        >
                            <span>¿Cómo puedo crear una cuenta de <strong>Market</strong>?</span>
                            <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rotate-45 border-b-2 border-r-2 transition-transform ${openQuestion === 'account' ? '-rotate-[135deg]' : '-rotate-[45deg]'}`} />
                        </button>
                    </h2>
                    <div id="answer-account" role="region" hidden={openQuestion !== 'account'} className="border-t border-gray-300 bg-white p-4 text-left text-gray-800" aria-labelledby="question-account">
                        Puedes crear una cuenta ingresando al siguiente <Link className="text-blue-700 underline hover:text-blue-900" to="/crear-cuenta">enlace</Link> y siguiendo las instrucciones.
                    </div>
                </div>
                <div className="overflow-hidden rounded border-2 border-gray-500">
                    <h2>
                        <button
                            id="question-cancel"
                            className={`flex w-full items-center justify-between gap-4 p-4 text-left ${openQuestion === 'cancel' ? 'bg-gray-600 text-white' : 'bg-gray-50 text-gray-900'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700`}
                            type="button"
                            aria-expanded={openQuestion === 'cancel'}
                            aria-controls="answer-cancel"
                            onClick={() => toggleQuestion('cancel')}
                        >
                            <span>¿Puedo anular mi compra?</span>
                            <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rotate-45 border-b-2 border-r-2 transition-transform ${openQuestion === 'cancel' ? '-rotate-[135deg]' : '-rotate-[45deg]'}`} />
                        </button>
                    </h2>
                    <div id="answer-cancel" role="region" hidden={openQuestion !== 'cancel'} className="border-t border-gray-300 bg-white p-4 text-left text-gray-800" aria-labelledby="question-cancel">
                        Conforme a lo dispuesto en la ley del consumidor, dispones de <strong>10 días</strong> para anular tu compra sin expresión de causa.
                        Para ello debes devolver los productos adquiridos en perfectas condiciones.
                        Esto no aplica a servicios, productos hechos a medida, productos que puedan deteriorarse rápidamente por su uso o productos que, por su naturaleza, no puedan ser devueltos.
                    </div>
                </div>
                <div className="overflow-hidden rounded border-2 border-gray-500">
                    <h2>
                        <button
                            id="question-points"
                            className={`flex w-full items-center justify-between gap-4 p-4 text-left ${openQuestion === 'points' ? 'bg-gray-600 text-white' : 'bg-gray-50 text-gray-900'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700`}
                            type="button"
                            aria-expanded={openQuestion === 'points'}
                            aria-controls="answer-points"
                            onClick={() => toggleQuestion('points')}
                        >
                            <span>¿Cómo acumulo puntos MarketGo?</span>
                            <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rotate-45 border-b-2 border-r-2 transition-transform ${openQuestion === 'points' ? '-rotate-[135deg]' : '-rotate-[45deg]'}`} />
                        </button>
                    </h2>
                    <div id="answer-points" role="region" hidden={openQuestion !== 'points'} className="border-t border-gray-300 bg-white p-4 text-left text-gray-800" aria-labelledby="question-points">
                        Para acumular puntos <span className="italic">MarketGo</span> solo debes inscribirte al programa de puntos con tus datos.
                        Puedes hacerlo en cualquiera de nuestras sucursales, dirigiéndote a <span className="italic">Servicio al cliente</span>, o a través del siguiente <Link className="text-blue-700 underline hover:text-blue-900" to="/marketgo">enlace</Link>.<br />
                        El programa de puntos <span className="italic">MarketGo</span> es gratuito y puedes darte de baja en cualquier momento.
                    </div>
                </div>
                <div className="overflow-hidden rounded border-2 border-gray-500">
                    <h2>
                        <button
                            id="question-receipt"
                            className={`flex w-full items-center justify-between gap-4 p-4 text-left ${openQuestion === 'receipt' ? 'bg-gray-600 text-white' : 'bg-gray-50 text-gray-900'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700`}
                            type="button"
                            aria-expanded={openQuestion === 'receipt'}
                            aria-controls="answer-receipt"
                            onClick={() => toggleQuestion('receipt')}
                        >
                            <span>Perdí mi boleta, ¿cómo puedo recuperarla?</span>
                            <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rotate-45 border-b-2 border-r-2 transition-transform ${openQuestion === 'receipt' ? '-rotate-[135deg]' : '-rotate-[45deg]'}`} />
                        </button>
                    </h2>
                    <div id="answer-receipt" role="region" hidden={openQuestion !== 'receipt'} className="border-t border-gray-300 bg-white p-4 text-left text-gray-800" aria-labelledby="question-receipt">
                        Puedes recuperar tu boleta con tu RUT en cualquiera de nuestras sucursales o a través de la página. Solo ingresa a tu cuenta y dirígete al menú 'Mis compras'.
                    </div>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-gray-900">¿No encontraste lo que buscabas?</h2>
                <Link to="/contactanos" className="my-2 inline-flex items-center rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Contáctanos</Link>
            </div>
        </section>
    )
}

export default PreguntasFrecuentes