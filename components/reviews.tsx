"use client";
import { uniqueNamesGenerator, adjectives, colors, animals, Config, names } from 'unique-names-generator';

const reviews = [
  "Une véritable avancée pour mon entreprise. Je recommande fortement ce service à tous les professionnels sérieux.",
  "Cela a complètement transformé la façon dont je gère mon entreprise. Je ne peux plus me passer de ce précieux outil.",
  "Le retour sur investissement de ce service est incroyable. Chaque euro dépensé en vaut la peine.",
  "Une plateforme vraiment facile à utiliser qui a eu un véritable impact sur mon travail. Extrêmement satisfaite.",
  "Grâce à ce service, j'ai pu me concentrer sur ce qui compte vraiment pour mon entreprise.",
  "Un outil essentiel pour moderniser mon entreprise. L'assistance est excellente aussi.",
  "Cela a changé la donne pour mon entreprise, davantage d'efficacité et un gain de temps énorme.",
  "Un outil remarquable qui a immédiatement été bénéfique pour mon entreprise.",
  "Cet outil a rendu la gestion de mon entreprise tellement plus facile. Je le recommande vivement.",
  "Un service incroyable qui a transformé la façon dont je gère mon travail. Un atout majeur.",
  "Fantastique ! Ma productivité a augmenté de façon spectaculaire depuis que j'utilise ce service.",
  "Pratique, efficace, et tellement simple à utiliser. Je suis ravi de cet outil.",
  "Un investissement que je ne regrette absolument pas, le temps et les efforts économisés sont inestimables.",
  "Cet outil a eu un impact significatif sur la façon dont nous gérons notre entreprise. Un grand pas en avant.",
  "Je suis impressionné par l'intelligence et l'efficacité de ce service. Un must-have définitivement.",
  "Un excellent produit, guichet unique pour tous les besoins de mon entreprise.",
  "Ce service a révolutionné ma méthode de travail. Je peux maintenant me concentrer sur les tâches plus stratégiques.",
  "Je suis très satisfait de cet outil. C'est un ajout essentiel à la trousse d'outils de mon entreprise.",
  "Un véritable accélérateur de performance pour mon business.",
  "C'est une mine d'or pour tous les professionnels qui cherchent à gagner du temps et à être plus efficaces.",
  "Un outil extrêmement utile et rentable. Recommandé pour toutes les entreprises.",
  "Je suis ravi de ce produit. Il est rapide, efficace et incroyablement précis.",
  "Son impact a été immédiatement visible et a transformé mon entreprise.",
  "Un outil génial pour les professionnels. Il offre tellement de fonctionnalités utiles.",
  "Incroyablement pratique et facile à utiliser. Un atout majeur pour ma productivité.",
  "L'utilisation de cet outil a grandement amélioré la gestion de mon entreprise. Je le recommande fortement.",
  "Un investissement rentable qui génère déjà des résultats concrets pour mon entreprise.",
  "Le gain de temps est impressionnant. Cela a vraiment changé la donne pour mon entreprise.",
  "J'ai vu une amélioration significative de mon efficacité depuis que j'ai adopté cet outil. Très heureux de mon achat.",
  "Rapide, facile à utiliser et très efficace. C'est l'outil que chaque professionnel devrait avoir."
]

const posts = [
  "Directeur général",
  "Spécialiste en stratégie numérique",
  "Responsable communication",
  "Chef de projet digital",
  "Propriétaire de restaurant",
  "Gérant d'hôtel",
  "Consultant en marketing digital",
  "Responsable du service client",
  "Directeur marketing",
  "Propriétaire d'un commerce de détail",
  "Fondateur de startup",
  "Chef d'équipe dans un call center",
  "Spécialiste en relations publiques",
  "Gérant d'une agence de voyage en ligne",
  "Responsable des ressources humaines",
  "Directeur e-commerce",
  "Responsable des opérations",
  "PDG d'une PME",
  "Entrepreneur dans le secteur de la tech",
  "Responsable logistique",
  "Directeur d'agence immobilière",
  "Responsable sécurité informatique",
  "Directeur d'une école en ligne",
  "Product Manager dans une startup tech",
  "Manager dans une entreprise de produits de beauté",
  "Gérant d'une boutique de mode en ligne",
  "Coach de vie",
  "Consultant SEO",
  "Analyste financier",
  "Responsable IT.",
]

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Reviews({ reverse }: { reverse: boolean }) {
  const results1 = reviews.sort(() => Math.random() - Math.random()).slice(0, 3)
  const results2 = reviews.sort(() => Math.random() - Math.random()).slice(0, 3)

  const posts1 = posts.sort(() => Math.random() - Math.random()).slice(0, 3)
  const posts2 = posts.sort(() => Math.random() - Math.random()).slice(0, 3)

  const customConfig: Config = {
    dictionaries: [names],
    style: 'capital'
  };

  const reviewNames = [
    "",
    uniqueNamesGenerator(customConfig),
    uniqueNamesGenerator(customConfig),
    uniqueNamesGenerator(customConfig),
    uniqueNamesGenerator(customConfig),
    uniqueNamesGenerator(customConfig),
    uniqueNamesGenerator(customConfig),
  ]

  if (reverse) {
    return (
      <div className='flex flex-row w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        <div className='flex flex-row animate-infinite-scroll-reverse'>
          {
            results1.map((review, index) => {
              return (
                <div key={index} className="max-w-xs sm:max-w-md ml-12 w-max bg-[#171717] text-white p-5 border border-[#272727] rounded-lg aria-hidden">
                  <p className="text-base max-w-full w-max">
                    {review}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      alt="Illustration"
                      className="bg-cover bg-no-repeat bg-center rounded-full"
                      height="50"
                      src="/merlin/image4.png"
                      style={{
                        objectFit: "cover",
                      }}
                      width="50"
                    />
                    <div className="ml-3">
                      <p className="text-lg font-semibold">{reviewNames[index + 1]}</p>
                      <p className="text-sm opacity-80">{posts1[index]}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {
            results1.map((review, index) => {
              return (
                <div key={index} className="max-w-xs sm:max-w-md ml-12 w-max bg-[#171717] text-white p-5 border border-[#272727] rounded-lg aria-hidden">
                  <p className="text-base max-w-full w-max">
                    {review}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      alt="Illustration"
                      className="bg-cover bg-no-repeat bg-center rounded-full"
                      height="50"
                      src="/merlin/image4.png"
                      style={{
                        objectFit: "cover",
                      }}
                      width="50"
                    />
                    <div className="ml-3">
                      <p className="text-lg font-semibold">{reviewNames[index + 1]}</p>
                      <p className="text-sm opacity-80">{posts1[index]}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className='flex flex-row w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
      <div className='flex flex-row animate-infinite-scroll'>
        {
          results2.map((review, index) => {
            return (
              <div key={index} className="max-w-xs sm:max-w-md ml-12 w-max bg-[#171717] text-white p-5 border border-[#272727] rounded-lg aria-hidden">
                <p className="text-base max-w-full w-max">
                  {review}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    alt="Illustration"
                    className="bg-cover bg-no-repeat bg-center rounded-full"
                    height="50"
                    src="/merlin/image4.png"
                    style={{
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="ml-3">
                    <p className="text-lg font-semibold">{reviewNames[(index + 1) * 2]}</p>
                    <p className="text-sm opacity-80">{posts2[index]}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        {
          results2.map((review, index) => {
            return (
              <div key={index} className="max-w-xs sm:max-w-md ml-12 w-max bg-[#171717] text-white p-5 border border-[#272727] rounded-lg aria-hidden">
                <p className="text-base max-w-full w-max">
                  {review}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    alt="Illustration"
                    className="bg-cover bg-no-repeat bg-center rounded-full"
                    height="50"
                    src="/merlin/image4.png"
                    style={{
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="ml-3">
                    <p className="text-lg font-semibold">{reviewNames[(index + 1) * 2]}</p>
                    <p className="text-sm opacity-80">{posts2[index]}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}