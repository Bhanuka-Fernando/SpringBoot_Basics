package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // taken from lombok
@NoArgsConstructor // give a constructor without arguments
@AllArgsConstructor // give  a constructor with one argument
public class UserDTO {
    private int id;
    private String name;
}
