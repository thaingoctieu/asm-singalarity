package com.example.singalarityasm;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity // This tells Hibernate to make a table out of this class
@Table
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonIgnore
  @Column(unique=true)
  private Integer id;

  @Column(unique=true)
  private String email;
  private String name;
  private String bday;
  private String pw;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getBday() {
    return bday;
  }

  public void setBday(String bday) {
    this.bday = bday;
  }

  public String getPw() {
    return pw;
  }

  public void setPw(String pw) {
    this.pw = pw;
  }
}