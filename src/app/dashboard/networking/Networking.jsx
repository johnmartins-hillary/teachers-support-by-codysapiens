"use client"
// NetworkingPage.js
import React, { useState } from 'react';
import SearchBar from './Searchbar';
import TeacherCard from './TeacherCard';
import Modal from './Modal';
import SummaryCard from './SummaryCard';
import generateDummyTeachers from "./generateDummyTeachers"
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import { toast } from 'react-toastify';

const NetworkingPage = () => {
  const [teachers,setTeachers] = useState(generateDummyTeachers(20)); // Assume generateDummyTeachers function is imported
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const PAGE_SIZE = 5;

  const handleSearch = (searchTerm) => {
    // Perform search logic based on searchTerm
    const results = teachers.filter(teacher => 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPage(1); // Reset current page when searching
  };

  const handleFollow = (teacherId) => {
    // Logic to follow/unfollow teacher
    toast.success(`Following teacher with ID: ${teacherId}`);
  };

  const handleModal = (teacher) => {
    setModalOpen(true);
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTeacher(null);
  };

  const totalPages = Math.ceil(searchResults.length / PAGE_SIZE);
  const paginatedResults = searchResults.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);


  return (
    <PageWrapper>
    <div className="p-8 text-gray-500">
      <h2 className="text-2xl font-bold mb-4">Teacher Networking</h2>
      <SummaryCard numFollowing={10} numFollowers={20} />
      <SearchBar handleSearch={handleSearch} />
      <div className="grid grid-cols-2 gap-4">
        {paginatedResults.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} handleFollow={handleFollow} handleModal={handleModal} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="mr-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Previous</button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="ml-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">Next</button>
        </div>
      )}
      <Modal isOpen={modalOpen} closeModal={closeModal} teacher={selectedTeacher} />
    </div>
    </PageWrapper>
  );
};

export default NetworkingPage;
