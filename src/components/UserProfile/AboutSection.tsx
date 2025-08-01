export default function AboutSection() {
  return (
    <div className="space-y-6">
      {/* About BCET Section */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          About BCET
        </h3>
        <div className="text-gray-600 dark:text-gray-400 space-y-4">
          <p>
            Bengal College of Engineering and Technology, BCET is one of the Top 10 Engineering Colleges in West Bengal, Durgapur which was set up under the aegis of SKS Educational and Social Trust in 2001. The college offers a multitude of under graduate and post graduate degree courses in different branches of engineering and management. Proximity of regions premier educational and research institutes like National Institute of Technology, Durgapur; Central Mechanical Engineering Research Institute, Durgapur; Indian Institute of Technology, Kharagpur; Indian Statistical Institute, Kolkata; Jadavpur University, Kolkata; Indian Institute of Engineering Science and Technology, Howrah; have resulted in vast pool of intellectual capital. Today, its infrastructure includes airy classrooms, well-equipped laboratories, safe and secure hostels for boys and girls, Multigym, Greenfield playgrounds to name a few. Many high profile Ministers, dignitaries and Academicians of national repute have visited and praised the college campus and its infrastructure.
          </p>
          <p>
            Bengal College of Engineering and Technology was the National Champions in the years 2008, 2009 and 2010, Runners up in the years 2011, 2012 and 2013 and again Regional Champions in the years 2014 and 2015 in the National Entrepreneurship Network (NEN). In 2016 the college received the award for Honour Role. These awards ensure a special recognition for the entire Durgapur region in the entrepreneurial map of the nation.
          </p>
          <p>
            In our quest for excellence in education, Bengal College of Engineering and Technology has been awarded the title of "Outstanding Engineering Institute (East)" for five times i.e in the years 2012, 2013, 2014, 2016 and 2017. The 9th DNA Innovative Education Awards 2017 was presented to Prof. Dr. A.C. Ganguli, Director, SKS Group of Institutions by Hon'ble Education Minister of Sri Lanka, Shri Akila Viraj Kariyawasam, who was also the Chief Guest for this function organised at the Taj Lands End, Mumbai. The award was presented on 18th February 2017 in presence of international dignitaries, admired delegates and various other senior professionals across the Industry. The award bears testimony to the quality of education imparted at Bengal College of Engineering and Technology.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Quick Stats
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <p className="text-2xl font-bold text-gray-800 dark:text-white/90">150+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Students</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <p className="text-2xl font-bold text-gray-800 dark:text-white/90">25+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Faculty</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <p className="text-2xl font-bold text-gray-800 dark:text-white/90">8</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Courses</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <p className="text-2xl font-bold text-gray-800 dark:text-white/90">4</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
