import React from 'react'
import SubpageHeroText from '../components/SubpageHeroText'
import Banner from "../images/banner.webp"
import OneWorld from "../images/one-world.webp"
import Plant from "../images/sustainability.webp"

export default function Values() {
  return (
    <div className='page'>
      <SubpageHeroText whiteText="Vi tror på at vi sammen kan skabe en grønnere fremtid. " greyText="Men vi har brug for din hjælp." />
      <section className='values-banner'>
        <div>
          <img src={Banner} width={1500} height={500} alt='Banner' />
        </div>
      </section>
      <section className='sustainability'>
        <div className='values-content'>
          <div className='values-content-text'>
            <h1>Med tanke på miljøet.</h1>
            <div className='gradient-line'></div>
            <p>
              Hos Levels er vi forpligtede til at reducere vores indvirkning på miljøet og fremme samfundsansvarlige
              forretningspraksisser. Vi tror på, at det er vigtigt at passe på planeten, både for nutidige og kommende generationer.
            </p>
            <p>
              Grunden til, at vi brænder for at reducere vores miljømæssige indvirkning, er at beskytte den naturlige verden.
              Vi forstår godt, at vores handlinger har konsekvenser, og vi vil gøre vores del for at mindske den skade, vores industri kan forårsage.
            </p>
            <p>Med det bæredygtige perspektiv til webdesign og webudvikling vi har her hos Levels, medfølger der også en række fordele for dig som kunde. Vores tilgang gør at de digitale løsninger vi giver liv bliver mere brugervenlige, samt får du også et hurtigere website.</p>
            <p>
              Ved at omfavne miljøvenlige praksisser kan vi mindske vores CO2-fodaftryk og arbejde mod en mere bæredygtig fremtid.
            </p>
          </div>
          <div className='values-content-image'>
            <img src={Plant} width={750} height={500} alt='Bæredygtighed' />
          </div>
        </div>
      </section>
      <section className='climate-action'>
        <div className='values-content'>
          <div className='values-content-image'>
            <img src={OneWorld} width={750} height={500} alt='Klimaindsats' />
          </div>
          <div className='values-content-text'>
            <h1>Klimaindsats.</h1>
            <div className='gradient-line'></div>
            <p>
              Vi skal alle gøre en indsats når det kommer til klimaet, også her hos Levels, hvor vi gør flere ting for at holde verdenen så grøn og fremtidsdygtig som muligt.
            </p>
            <p>
              <span className='bold'>Reducering af energiforbrug.</span> Vores udstyr er så energieffektivt vi kan gøre det, vi bruger f.eks.
              strømforsyning i høj kvalitet og har konfigureret strømstyring.
            </p>
            <p>
              <span className='bold'>Reducering af emissioner.</span> Vi bruger - også når vi laver en hjemmeside til dig - grøn webhosting, dvs. at de servere der kører
              det vi laver, bruger vedvarende energikilder som sol, vand, eller vind. Samtidig sørger vi for at minimére størrelsen på din
              hjemmeside, hvilket både giver brugere en bedre oplevelse gennem bedre performance, og et lavere aftryk.
            </p>
            <p>
              <span className='bold'>Reducering af affald.</span> Vi bruger intet papir, alt foregår elektronisk; faktura, bogholdning, og alt det kedelige.
            </p>
          </div>
        </div>
      </section>
      <section className='statistics'>
        <div className='graphs'>
          <div>
            <div className='pink-blob blob'>
              <p>400.4%</p>
            </div>
            <p>
              Ifølge <a target='_blank' href='https://httparchive.org/reports/page-weight?start=earliest&end=latest'>HTTPArchive.org</a>,
              er den gennemsnitlige hjemmeside i dag fire gange større end i 2010.
            </p>
          </div>
          <div>
            <div className='blue-blob blob'>
              <p>4.61g CO2</p>
            </div>
            <p>
              Ifølge <a target='_blank' href='https://www.wholegraindigital.com/blog/carbon-calculator-v2/'>WHOLEGRAIN digital</a>,
              udleder den gennemsnitlige testede hjemmeside 4.61g CO2.
            </p>
          </div>
          <div>
            <div className='green-blob blob'>
              <p>
                29%
              </p>
            </div>
            <p>
              Ifølge <a target='_blank' href='https://www.wholegraindigital.com/blog/carbon-calculator-v2/'>WHOLEGRAIN digital</a>,
              bruger kun 29% af testede hjemmesider bæredygtig hosting.
            </p>
          </div>
        </div>
      </section>
      <section className='contact-us-cta'>
        <h1>Vil du gøre en forskel?</h1>
        <div className='gradient-line'></div>
        <p>
          Hvis du ønsker at gøre en positiv forskel for miljøet samtidig med, at du bygger en stærk online tilstedeværelse for dig eller din virksomhed,
          så er det på tide at investere i en miljøvenlig og energieffektiv hjemmeside.
        </p>
        <p>
          Når du vælger at købe en hjemmeside hos os, så kan du vise dine besøgende, at din virksomhed bekymrer sig om planeten og tager
          ansvar for at reducere dit CO2-aftryk. Vores team af eksperter kan hjælpe dig med at skabe en langtidsholdbar online tilstedeværelse ved at udnytte
          de bedste teknologier og designprincipper til det givne projekt.
        </p>
        <p>
          Lyder det interessant? Så kontakt os i formularen nedenfor.
        </p>
      </section>
    </div>
  )
}
