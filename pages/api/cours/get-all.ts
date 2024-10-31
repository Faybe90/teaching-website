import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllCourses = async () => {
  const response = await axios.get("/api/cours");
  return response.data;
};

export const useCoursesQuery = () => useQuery(["courses"], getAllCourses);
