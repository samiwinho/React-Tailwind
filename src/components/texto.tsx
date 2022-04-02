export const TextoItem = () => {
    return (
        <div className="bg-violet-200 p-8 shadow-lg rounded-xl overflow-hidden md:flex md:p-0">
            <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src="/perfil.jpg" alt="" />
            <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
                <div className="text-lg font-semibold">
                    "Quando comecei este curso não sabia nada de programação,
                    mas graças a este curso consegui um emprego como desenvolvedor web.
                    Um grande obrigado ao doutor engenheiro Samuel Fernando Martins da Silva."
                </div>
                <div className="font-medium">
                    <div className="text-violet-600 font-bold">
                        Samuel Silva
                    </div>
                    <div className="text-gray-500">
                        03/04/2022
                    </div>
                </div>
            </div>
        </div>
    )
};