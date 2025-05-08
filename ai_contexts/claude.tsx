import React from 'react';
import { ChevronRight, Calendar, User, Flag, Book, MapPin, Star } from 'lucide-react';

export default function BiographyPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Navigation - Same as homepage */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-yellow-600 font-bold text-xl">Pope Leo XIV</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-yellow-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Biography
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Papal Election
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Teachings
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Gallery
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex items-center space-x-4">
                <select className="text-sm border-gray-300 rounded-md">
                  <option>English</option>
                  <option>Español</option>
                  <option>Polski</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Life & Ministry</h1>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Biography of Pope Leo XIV
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              From his humble beginnings in Chicago to his historic election as the first American Pope
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 md:space-x-8">
            <a href="#early-life" className="text-yellow-600 hover:text-yellow-800 px-3 py-2 text-sm font-medium">
              Early Life
            </a>
            <a href="#education" className="text-gray-500 hover:text-gray-800 px-3 py-2 text-sm font-medium">
              Education
            </a>
            <a href="#peru" className="text-gray-500 hover:text-gray-800 px-3 py-2 text-sm font-medium">
              Ministry in Peru
            </a>
            <a href="#leadership" className="text-gray-500 hover:text-gray-800 px-3 py-2 text-sm font-medium">
              Leadership Roles
            </a>
            <a href="#vatican" className="text-gray-500 hover:text-gray-800 px-3 py-2 text-sm font-medium">
              Vatican Service
            </a>
          </div>
        </div>
      </div>

      {/* Early Life Section */}
      <div id="early-life" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Early Life in Chicago
              </h2>
              <p className="mt-4 text-gray-500">
                Robert Francis Prevost was born on September 14, 1955, in Chicago, Illinois to a family with rich cultural heritage. His father, Louis Marius Prevost, had French and Italian roots and served as a catechist. His mother, Mildred Martínez, was of Spanish descent and known for her warm hospitality, often welcoming priests into their family home.
              </p>
              <p className="mt-4 text-gray-500">
                Young Robert was deeply influenced by his early experiences with the Church. He served as an altar boy and attended the parish school, where he developed a strong foundation in faith. The steady stream of clergy who visited his home and his father's example as a catechist helped shape his early understanding of religious service.
              </p>
              <p className="mt-4 text-gray-500">
                His multilingual household would later prove valuable in his global ministry, as he grew up with exposure to different cultures and languages, reflecting the universal nature of the Church he would one day lead.
              </p>
              
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Born: September 14, 1955</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Birthplace: Chicago, Illinois, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Young Robert Francis Prevost in Chicago" 
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Childhood home in Chicago where Robert Francis Prevost grew up.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Education and Formation
              </h2>
              <p className="mt-4 text-gray-500">
                Prevost's academic journey began at the minor seminary of the Order of St. Augustine, where he completed his secondary studies in 1973. He then pursued higher education at Villanova University, earning a Bachelor of Science in Mathematics in 1977, demonstrating his aptitude for analytical thinking that would later serve him well in leadership positions.
              </p>
              <p className="mt-4 text-gray-500">
                After discerning his vocation to the priesthood, he joined the Order of St. Augustine (OSA) in September 1977, taking his first vows in September 1978 and his solemn vows in August 1981. This commitment to the Augustinian order would shape his spirituality and approach to ministry throughout his life.
              </p>
              <p className="mt-4 text-gray-500">
                Prevost continued his studies at Catholic Theological Union in Chicago, earning a Master of Divinity degree in 1982, the same year he was ordained to the priesthood. He then pursued advanced studies in Canon Law at the Pontifical University of Saint Thomas Aquinas (Angelicum) in Rome, earning both a Licentiate (1984) and a Doctorate (1987). His doctoral thesis, "The role of the local prior in the Order of Saint Augustine," foreshadowed his future leadership roles within the order and the Church.
              </p>
              
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">B.S. Mathematics, Villanova University (1977)</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">M.Div., Catholic Theological Union (1982)</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Book className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Doctorate in Canon Law, Angelicum (1987)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:order-1">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Prevost during his studies" 
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                The Pontifical University of Saint Thomas Aquinas in Rome, where Prevost earned his doctorate.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry in Peru Section */}
      <div id="peru" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ministry in Peru
              </h2>
              <p className="mt-4 text-gray-500">
                Prevost's connection to Peru began in 1985 when he joined the Augustinian mission there, serving as chancellor of the Territorial Prélature of Chulucanas until 1986. After a brief return to the United States, he went back to Peru in 1988 for what would become a decade of transformative ministry.
              </p>
              <p className="mt-4 text-gray-500">
                During these ten years in Trujillo, Peru, Prevost took on multiple roles that demonstrated his administrative abilities and pastoral heart. He headed the Augustinian seminary, taught canon law in the diocesan seminary, and served as prefect of studies. His expertise in canon law was recognized as he served as a judge of the regional ecclesiastical court and as a member of the college of consultors of Trujillo.
              </p>
              <p className="mt-4 text-gray-500">
                Beyond his administrative and academic roles, Prevost maintained a direct connection with the faithful by leading a congregation on the outskirts of Trujillo. This combination of leadership responsibilities and direct pastoral work gave him a comprehensive understanding of the Church's mission and challenges in Latin America, a perspective that would prove valuable in his later global roles.
              </p>
              <p className="mt-4 text-gray-500">
                His time in Peru culminated years later when Pope Francis appointed him Bishop of Chiclayo in 2015, after he had served as apostolic administrator of the diocese since 2014. This return to Peru deepened his connection to the country and its people, eventually leading to his acquisition of Peruvian citizenship, making him a dual citizen of the United States and Peru.
              </p>
              
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">First mission to Peru: 1985-1986</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Extended ministry in Peru: 1988-1998</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Flag className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Bishop of Chiclayo, Peru: 2015-2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Robert Prevost in Peru" 
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Bishop Prevost celebrating Mass with the faithful in the Diocese of Chiclayo, Peru.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Roles Section */}
      <div id="leadership" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Leadership in the Augustinian Order
              </h2>
              <p className="mt-4 text-gray-500">
                Prevost's leadership abilities were recognized early in his religious life. In 1998, he was elected provincial of the Augustinian Province of Chicago, returning to the United States to assume this position in March 1999. This role marked the beginning of a series of significant leadership positions that would shape his administrative approach.
              </p>
              <p className="mt-4 text-gray-500">
                His most significant leadership role came in 2001 when he was elected Prior General of the Order of Saint Augustine, the highest position within the order worldwide. This six-year term was renewed in 2007, giving him a total of twelve years at the helm of the Augustinian community globally. This experience provided him with extensive international exposure and honed his abilities to lead a diverse religious community across cultural boundaries.
              </p>
              <p className="mt-4 text-gray-500">
                Upon completing his second term as Prior General in 2013, Prevost returned to Chicago where he served as director of formation in the Convent of St. Augustine, as well as first councilor and provincial vicar of the province of Our Mother of Good Counsel, which covers the midwestern United States.
              </p>
              <p className="mt-4 text-gray-500">
                Throughout these leadership roles, Prevost developed a reputation for thoughtful decision-making, attentive listening, and a collaborative approach to governance—qualities that would later be valued in his episcopal ministry and Vatican service.
              </p>
              
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Provincial of the Augustinian Province of Chicago (1999-2001)</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Prior General of the Order of Saint Augustine (2001-2013)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:order-1">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Prevost as Prior General" 
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Robert Francis Prevost during his time as Prior General of the Order of Saint Augustine.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vatican Service Section */}
      <div id="vatican" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Vatican Service and Elevation to Cardinal
              </h2>
              <p className="mt-4 text-gray-500">
                Pope Francis recognized Prevost's administrative talents and pastoral experience when he appointed him as a member of the Congregation for the Clergy in July 2019. This appointment was followed by his naming as a member of the Congregation for Bishops in November 2020, signaling the Pope's trust in Prevost's judgment regarding episcopal appointments.
              </p>
              <p className="mt-4 text-gray-500">
                On January 30, 2023, Pope Francis appointed Prevost as Prefect of the Dicastery for Bishops, a pivotal role in the Vatican that oversees the selection of bishops worldwide. This appointment placed him at the center of the Church's governance, giving him significant influence over the future leadership of dioceses globally. Simultaneously, he was named president of the Pontifical Commission for Latin America, reflecting his deep connection to the region.
              </p>
              <p className="mt-4 text-gray-500">
                In recognition of his service and important position, Pope Francis created Prevost a cardinal on September 30, 2023, assigning him the title of cardinal-deacon of Santa Monica degli Agostiniani Church in Rome. On February 6, 2025, Pope Francis further promoted him to cardinal-bishop, assigning him to the Suburbicarian Diocese of Albano in the Province of Rome, one of the highest ranks within the College of Cardinals.
              </p>
              <p className="mt-4 text-gray-500">
                His service as Prefect of the Dicastery for Bishops until Pope Francis's death on April 21, 2025, positioned him prominently among the cardinals entering the conclave. His experience, multilingual abilities, and unique perspective as both an American and Peruvian made him a notable figure in the papal election that would follow.
              </p>
              
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Prefect of the Dicastery for Bishops (2023-2025)</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Created Cardinal (September 30, 2023)</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-medium">Elected Pope Leo XIV (May 8, 2025)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden lg:aspect-w-5 lg:aspect-h-6">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Cardinal Prevost at the Vatican" 
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Cardinal Robert Francis Prevost at the Vatican after being created a cardinal by Pope Francis.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-yellow-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">"Whether you decide to appoint me or to leave me where I am, I will be happy;</span>
            <span className="block text-yellow-600">but if you ask me to take on a new role in the Church, I will accept."</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700">
                Papal Election
                <ChevronRight className="ml-3 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Same as homepage */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <span className="text-yellow-500 font-bold text-2xl">Pope Leo XIV</span>
              <p className="text-gray-300 text-base">
                A tribute website dedicated to His Holiness Pope Leo XIV, the first American pope in the history of the Catholic Church.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    About
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Biography
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Papal Election
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Ministry in Peru
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Name Significance
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Resources
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Photo Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Writings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Vatican Links
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 Pope Leo XIV Tribute Site. Developed with love in Peru and Poland.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}