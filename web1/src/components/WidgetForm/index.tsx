import bugImgUrl from '../../images/Bug.svg'
import ideaImgUrl from '../../images/Idea.svg'
import toughtImgUrl from '../../images/Thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export type FeedbackType = keyof typeof feedbackTypes;


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImgUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImgUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: toughtImgUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}


export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)

        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep setFeedbackType={setFeedbackType}/>
                        ) : ( 
                        <FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} onFeedbackRestartRequested={handleRestartFeedback} feedbackType={feedbackType}/>
                    )}
                </>
            ) }

            <footer className="text-xs text-neutral-400">
                Feito com 🤍 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">pela Rocketseat</a>
            </footer>
        </div>
    )
}