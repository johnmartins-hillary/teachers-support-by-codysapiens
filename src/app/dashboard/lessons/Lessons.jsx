"use client";
import {useState} from "react"
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import LessonCard from './LessonCard';
import LessonModal from './LessonModal';
import LessonForm from './LessonForm';
import Pagination from "./Pagintaion"


const dummyLessons = [
  { 
    id: 5, 
    title: 'Creative Writing Workshop', 
    description: 'Develop your creative writing skills through engaging workshops and exercises.', 
    students: 40, 
    likes: 22, 
    dislikes: 3, 
    lessonType: 'text',
    lessonSection:"text",
  },
  { 
    id: 6, 
    title: 'English Literature: Victorian Era', 
    description: 'Explore the literature and culture of the Victorian era, including the works of Charles Dickens and Jane Austen.', 
    students: 35, 
    likes: 19, 
    dislikes: 2, 
    lessonType: 'video', 
    media: 'https://www.youtube.com/embed/vrU6YJle6Q4',
    lessonSection:"video",

  },
  { 
    id: 7, 
    title: 'Debating Techniques', 
    description: 'Master the art of persuasive speaking and critical thinking through structured debates and discussions.', 
    students: 30, 
    likes: 16, 
    dislikes: 4, 
    lessonType: 'text',
    lessonSection:"text",

  },
  { 
    id: 8, 
    title: 'Poetry Analysis', 
    description: 'Analyze and interpret classic and contemporary poetry, exploring themes, imagery, and poetic devices.', 
    students: 25, 
    likes: 12, 
    dislikes: 1, 
    lessonType: 'video', 
    media: 'https://www.youtube.com/embed/vrU6YJle6Q4' ,
    lessonSection:"video",

  },
  { 
    id: 9, 
    title: 'Literary Theory', 
    description: 'Examine different approaches to literary analysis, including structuralism, postcolonialism, and feminism.', 
    students: 20, 
    likes: 10, 
    dislikes: 2, 
    lessonType: 'text',
    lessonSection:"text",

  },
  { 
    id: 10, 
    title: 'Public Speaking Workshop', 
    description: 'Gain confidence and skills in public speaking through interactive workshops and speaking exercises.', 
    students: 30, 
    likes: 18, 
    dislikes: 3, 
    lessonType: 'video', 
    media: 'https://www.youtube.com/embed/vrU6YJle6Q4' ,
    lessonSection:"video",

  },
  { 
    id: 11, 
    title: 'English Language Acquisition', 
    description: 'Improve your English language skills, including grammar, vocabulary, and pronunciation, through immersive activities and practice.', 
    students: 50, 
    likes: 25, 
    dislikes: 4, 
    lessonType: 'text',
    lessonSection:"text",
  },
  { 
    id: 12, 
    title: 'Literature of Diversity', 
    description: 'Explore literature written by diverse authors, focusing on themes of identity, culture, and social justice.', 
    students: 40, 
    likes: 20, 
    dislikes: 3, 
    lessonType: 'video', 
    media: 'https://www.youtube.com/embed/vrU6YJle6Q4',
    lessonSection:"video",

  }
]
const LessonsPage = () => {
  const [lessons, setLessons] = useState(dummyLessons)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const lessonsPerPage = 6; // Number of lessons per page
  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = lessons?.slice(indexOfFirstLesson, indexOfLastLesson);

  // Function to handle card click and open modal
  const handleCardClick = (lesson) => {
    setSelectedLesson(lesson);
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Function to add a new lesson
  const handleAddLesson = (lesson) => {
    setLessons([...lessons, lesson]);
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <PageWrapper>
    <div className="container mx-auto my-8 text-gray-500 px-8">
      <h1 className="text-3xl font-bold mb-8">Lessons</h1>
      {/* Lesson grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {lessons?.sort((a, b) => b.id - a.id)?.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} onClick={() => handleCardClick(lesson)} />
        ))}
      </div>
      {/* Lesson modal */}
      {modalOpen && selectedLesson && (
        <LessonModal lesson={selectedLesson} onClose={handleCloseModal} />
      )}
      {/* Pagination */}
      {/* <div className="flex justify-center mt-8">
        <Pagination
          currentPage={currentPage}
          totalItems={lessons?.length}
          itemsPerPage={lessonsPerPage}
          onPageChange={handlePageChange}
        />
      </div> */}
      {/* Lesson form */}
      <LessonForm onSubmit={handleAddLesson} lessons={lessons}/>
    </div>
    </PageWrapper>
  );
};

export default LessonsPage;