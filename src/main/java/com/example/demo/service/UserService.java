package com.example.demo.service;

import com.example.demo.DTO.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService {
    @Autowired  //used for automatic dependency injection
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;

    public List<UserDTO> getAllUsers(){
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>(){}.getType());
    }

    // get a single user
    public UserDTO getAnUser(Long id) throws UserPrincipalNotFoundException {
        Optional<User> userOptional = userRepo.findById(Math.toIntExact(id));
        if (userOptional.isPresent()) {
            return modelMapper.map(userOptional.get(), UserDTO.class);
        } else {
            throw new UserPrincipalNotFoundException("user not found with id : " + id);
        }
    }

    // to save user
    public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    //update user
    public UserDTO updateUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    // Delete user
    public String deleteUser(Long id){
        userRepo.deleteById(Math.toIntExact(id));
        return "User deleted";
    }
}
