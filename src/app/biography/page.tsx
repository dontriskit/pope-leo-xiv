import React from "react";
import {
  ChevronRight,
  Calendar,
  User,
  Flag,
  Book,
  MapPin,
  Star,
} from "lucide-react";
import Navbar from "@/app/_components/Navbar"; // Assuming Navbar is moved here
import Footer from "@/app/_components/Footer"; // Assuming Footer is moved here

// PlaceholderIcon removed as it was unused.

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar activePage="Biography" />

      {/* Page Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-base font-semibold tracking-wide text-yellow-600 uppercase">
              Life & Ministry {/* Replaced & with & */}
            </h1>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Biography of Pope Leo XIV
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              From his humble beginnings in Chicago to his historic election as
              the first American Pope
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="sticky top-16 z-40 border-b border-gray-200 bg-gray-50 py-6">
        {" "}
        {/* Adjusted sticky position */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 overflow-x-auto pb-2 md:space-x-8">
            <a
              href="#early-life"
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-yellow-600 hover:text-yellow-800"
            >
              Early Life
            </a>
            <a
              href="#education"
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800"
            >
              Education
            </a>
            <a
              href="#peru"
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800"
            >
              Ministry in Peru
            </a>
            <a
              href="#leadership"
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800"
            >
              Leadership Roles
            </a>
            <a
              href="#vatican"
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800"
            >
              Vatican Service
            </a>
            <a
              href="#election"
              className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800"
            >
              Papal Election
            </a>
          </div>
        </div>
      </div>

      {/* Early Life Section */}
      <section id="early-life" className="scroll-mt-32 bg-white py-16">
        {" "}
        {/* Added scroll-mt */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Early Life in Chicago
              </h2>
              <p className="mt-4 text-gray-500">
                Robert Francis Prevost was born on September 14, 1955, in
                Chicago, Illinois to a family with rich cultural heritage. His
                father, Louis Marius Prevost, had French and Italian roots and
                served as a catechist. His mother, Mildred Martínez, was of
                Spanish descent and known for her warm hospitality, often
                welcoming priests into their family home.
              </p>
              <p className="mt-4 text-gray-500">
                Young Robert was deeply influenced by his early experiences with
                the Church. He served as an altar boy and attended the parish
                school, where he developed a strong foundation in faith. The
                steady stream of clergy who visited his home and his father's {/* Fixed */}
                example as a catechist helped shape his early understanding of
                religious service.
              </p>
              <p className="mt-4 text-gray-500">
                His multilingual household would later prove valuable in his
                global ministry, as he grew up with exposure to different
                cultures and languages, reflecting the universal nature of the
                Church he would one day lead.
              </p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Born: September 14, 1955
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Birthplace: Chicago, Illinois, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-chicago.jpg" // Placeholder path
                  alt="Young Robert Francis Prevost in Chicago (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Childhood home in Chicago where Robert Francis Prevost grew up
                (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-32 bg-gray-50 py-16">
        {" "}
        {/* Added scroll-mt */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Education and Formation
              </h2>
              <p className="mt-4 text-gray-500">
                Prevost's academic journey began at the minor seminary of the {/* Fixed */}
                Order of St. Augustine, where he completed his secondary studies
                in 1973. He then pursued higher education at Villanova
                University, earning a Bachelor of Science in Mathematics in
                1977, demonstrating his aptitude for analytical thinking that
                would later serve him well in leadership positions.
              </p>
              <p className="mt-4 text-gray-500">
                After discerning his vocation to the priesthood, he joined the
                Order of St. Augustine (OSA) in September 1977, taking his first
                vows in September 1978 and his solemn vows in August 1981. This
                commitment to the Augustinian order would shape his spirituality
                and approach to ministry throughout his life.
              </p>
              <p className="mt-4 text-gray-500">
                Prevost continued his studies at Catholic Theological Union in
                Chicago, earning a Master of Divinity degree in 1982, the same
                year he was ordained to the priesthood. He then pursued advanced
                studies in Canon Law at the Pontifical University of Saint
                Thomas Aquinas (Angelicum) in Rome, earning both a Licentiate
                (1984) and a Doctorate (1987). His doctoral thesis, "The role {/* Fixed */}
                of the local prior in the Order of Saint Augustine," {/* Fixed */}
                foreshadowed his future leadership roles within the order and the Church.
              </p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      B.S. Mathematics, Villanova University (1977)
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      M.Div., Catholic Theological Union (1982)
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Doctorate in Canon Law, Angelicum (1987)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:order-1 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-angelicum.jpg" // Placeholder path
                  alt="Angelicum University in Rome (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                The Pontifical University of Saint Thomas Aquinas in Rome, where
                Prevost earned his doctorate (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry in Peru Section */}
      <section id="peru" className="scroll-mt-32 bg-white py-16">
        {" "}
        {/* Added scroll-mt */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ministry in Peru
              </h2>
              <p className="mt-4 text-gray-500">
                Prevost's connection to Peru began in 1985 when he joined the {/* Fixed */}
                Augustinian mission there, serving as chancellor of the
                Territorial Prélature of Chulucanas until 1986. After a brief
                return to the United States, he went back to Peru in 1988 for
                what would become a decade of transformative ministry.
              </p>
              <p className="mt-4 text-gray-500">
                During these ten years in Trujillo, Peru, Prevost took on
                multiple roles that demonstrated his administrative abilities
                and pastoral heart. He headed the Augustinian seminary, taught
                canon law in the diocesan seminary, and served as prefect of
                studies. His expertise in canon law was recognized as he served
                as a judge of the regional ecclesiastical court and as a member
                of the college of consultors of Trujillo.
              </p>
              <p className="mt-4 text-gray-500">
                Beyond his administrative and academic roles, Prevost maintained
                a direct connection with the faithful by leading a congregation
                on the outskirts of Trujillo. This combination of leadership
                responsibilities and direct pastoral work gave him a
                comprehensive understanding of the Church's mission and {/* Fixed */}
                challenges in Latin America, a perspective that would prove
                valuable in his later global roles.
              </p>
              <p className="mt-4 text-gray-500">
                His time in Peru culminated years later when Pope Francis
                appointed him Bishop of Chiclayo in 2015, after he had served as
                apostolic administrator of the diocese since 2014. This return
                to Peru deepened his connection to the country and its people,
                eventually leading to his acquisition of Peruvian citizenship,
                making him a dual citizen of the United States and Peru.
              </p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      First mission to Peru: 1985-1986
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Extended ministry in Peru: 1988-1998
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Bishop of Chiclayo, Peru: 2015-2023
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Acquired Peruvian Citizenship (during time as Bishop)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-peru.jpg" // Placeholder path
                  alt="Bishop Prevost in Peru (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Bishop Prevost celebrating Mass with the faithful in the Diocese
                of Chiclayo, Peru (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Roles Section */}
      <section id="leadership" className="scroll-mt-32 bg-gray-50 py-16">
        {" "}
        {/* Added scroll-mt */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Leadership in the Augustinian Order
              </h2>
              <p className="mt-4 text-gray-500">
                Prevost's leadership abilities were recognized early in his {/* Fixed */}
                religious life. In 1998, he was elected provincial of the
                Augustinian Province of Chicago, returning to the United States
                to assume this position in March 1999. This role marked the
                beginning of a series of significant leadership positions that
                would shape his administrative approach.
              </p>
              <p className="mt-4 text-gray-500">
                His most significant leadership role came in 2001 when he was
                elected Prior General of the Order of Saint Augustine, the
                highest position within the order worldwide. This six-year term
                was renewed in 2007, giving him a total of twelve years at the
                helm of the Augustinian community globally. This experience
                provided him with extensive international exposure and honed his
                abilities to lead a diverse religious community across cultural
                boundaries.
              </p>
              <p className="mt-4 text-gray-500">
                Upon completing his second term as Prior General in 2013,
                Prevost returned to Chicago where he served as director of
                formation in the Convent of St. Augustine, as well as first
                councilor and provincial vicar of the province of Our Mother of
                Good Counsel, which covers the midwestern United States.
              </p>
              <p className="mt-4 text-gray-500">
                Throughout these leadership roles, Prevost developed a
                reputation for thoughtful decision-making, attentive listening,
                and a collaborative approach to governance—qualities that would
                later be valued in his episcopal ministry and Vatican service.
              </p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Provincial of the Augustinian Province of Chicago
                      (1999-2001)
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Prior General of the Order of Saint Augustine (2001-2013)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:order-1 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-prior-general.jpg" // Placeholder path
                  alt="Prevost as Prior General (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Robert Francis Prevost during his time as Prior General of the
                Order of Saint Augustine (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vatican Service Section */}
      <section id="vatican" className="scroll-mt-32 bg-white py-16">
        {" "}
        {/* Added scroll-mt */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Vatican Service and Elevation to Cardinal
              </h2>
              <p className="mt-4 text-gray-500">
                Pope Francis recognized Prevost's administrative talents and {/* Fixed */}
                pastoral experience when he appointed him as a member of the
                Congregation for the Clergy in July 2019. This appointment was
                followed by his naming as a member of the Congregation for
                Bishops in November 2020, signaling the Pope's trust in {/* Fixed */}
                Prevost's judgment regarding episcopal appointments. {/* Fixed */}
              </p>
              <p className="mt-4 text-gray-500">
                On January 30, 2023, Pope Francis appointed Prevost as Prefect
                of the Dicastery for Bishops, a pivotal role in the Vatican that
                oversees the selection of bishops worldwide. This appointment
                placed him at the center of the Church's governance, giving him {/* Fixed */}
                significant influence over the future leadership of dioceses
                globally. Simultaneously, he was named president of the
                Pontifical Commission for Latin America, reflecting his deep
                connection to the region.
              </p>
              <p className="mt-4 text-gray-500">
                In recognition of his service and important position, Pope
                Francis created Prevost a cardinal on September 30, 2023,
                assigning him the title of cardinal-deacon of Santa Monica degli
                Agostiniani Church in Rome. On February 6, 2025, Pope Francis
                further promoted him to cardinal-bishop, assigning him to the
                Suburbicarian Diocese of Albano in the Province of Rome, one of
                the highest ranks within the College of Cardinals.
              </p>
              <p className="mt-4 text-gray-500">
                His service as Prefect of the Dicastery for Bishops until Pope
                Francis's death on April 21, 2025, positioned him prominently {/* Fixed */}
                among the cardinals entering the conclave. His experience,
                multilingual abilities, and unique perspective as both an
                American and Peruvian made him a notable figure in the papal
                election that would follow.
              </p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Prefect of the Dicastery for Bishops (2023-2025)
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Created Cardinal (September 30, 2023)
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="font-medium text-gray-800">
                      Promoted to Cardinal-Bishop (February 6, 2025)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-cardinal.jpg" // Placeholder path
                  alt="Cardinal Prevost at the Vatican (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Cardinal Robert Francis Prevost at the Vatican after being
                created a cardinal by Pope Francis (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Papal Election Section */}
      <section id="election" className="scroll-mt-32 bg-gray-50 py-16">
        {" "}
        {/* Added scroll-mt */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Papal Election - May 8, 2025
          </h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                The Conclave
              </h3>
              <p className="mt-4 text-gray-500">
                Following the death of Pope Francis on April 21, 2025, the
                College of Cardinals gathered in Rome for the conclave. The
                voting began on May 7, 2025, with 133 cardinal electors
                participating.
              </p>
              <p className="mt-4 text-gray-500">
                On May 8, 2025, white smoke rose from the Sistine Chapel
                chimney, signaling that a new pope had been elected. Cardinal
                Robert Francis Prevost had secured the necessary two-thirds
                majority (at least 89 votes).
              </p>
              <p className="mt-4 text-gray-500">
                When asked what name he would take as pope, he chose "Leo XIV," {/* Fixed */}
                a name carrying significant historical and symbolic meaning,
                linking him to predecessors known for theological clarity and
                social engagement.
              </p>
            </div>
            <div className="mt-8 lg:order-1 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-conclave.jpg" // Placeholder path
                  alt="Sistine Chapel during conclave (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                White smoke signals the election of a new Pope (Placeholder
                Image).
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              First Appearance
            </h3>
            <p className="mt-4 text-gray-500">
              When Cardinal Jean-Louis Tauran made the traditional "Habemus {/* Fixed */}
              Papam" announcement from the central loggia of St. Peter's {/* Fixed - assuming this was also intended although not explicitly in error list for apostrophe, it's good practice for consistency */}
              Basilica, he proclaimed that Cardinal Robert Francis Prevost had
              been elected and had taken the name Leo XIV.
            </p>
            <p className="mt-4 text-gray-500">
              Pope Leo XIV then appeared on the balcony, greeting the faithful
              gathered in St. Peter's Square. His election was historic as he {/* Fixed */}
              became the first American to be elected pope, breaking a long
              tradition of European pontiffs that was only briefly interrupted
              by Pope Francis, who was from Argentina.
            </p>
            {/* Add first words quote when available */}
            <blockquote className="mt-6 border-l-4 border-yellow-500 pl-4 text-gray-600 italic">
              "[First words as Pope - Placeholder]" {/* Fixed */}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="bg-yellow-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">
              "Whether you decide to appoint me or to leave me where I am, I {/* Fixed */}
              will be happy;
            </span>
            <span className="block text-yellow-600">
              but if you ask me to take on a new role in the Church, I will
              accept." {/* Fixed */}
            </span>
            <span className="mt-2 block text-lg text-gray-600">
              - Cardinal Prevost (Reported response to Pope Francis on potential
              appointment)
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/election"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-5 py-3 text-base font-medium text-white hover:bg-yellow-700"
              >
                Papal Election Details
                <ChevronRight className="-mr-1 ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}