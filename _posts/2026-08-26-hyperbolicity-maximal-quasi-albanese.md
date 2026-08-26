---
layout: paper
title: "Hyperbolicity and fundamental groups of complex quasi-projective varieties (I): Maximal quasi-Albanese dimension by Nevanlinna theory"
title_ja: "Nevanlinna理論による最大準Albanese次元の準射影多様体の双曲性"
authors: "Benoît Cadorel, Ya Deng, Katsutoshi Yamanoi"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  This is the first part of a series of three papers. In this paper, we establish a Big Picard type theorem for holomorphic maps $f:Y \to X$, where $Y$ is a ramified covering of the punctured disc $\mathbb{D}^*$ with small ramification and $X$ is a complex quasi-projective variety of log-general type and of maximal quasi-Albanese dimension. As a byproduct, we prove the generalized Green-Griffiths-Lang conjecture for such $X$. This paper summarizes the parts of the three-paper series that are based primarily on Nevanlinna theory.
topic: algebraic-geometry
tags:
  - hyperbolicity
  - fundamental-groups
arxiv_id: "2511.04405v1"
arxiv_url: "https://arxiv.org/abs/2511.04405"
arxiv_submitted: "2025-11-06"
arxiv_updated: "2025-11-06"
summary: >-
  対数一般型かつ最大準Albanese次元の滑らかな準射影多様体に対し、小さい分岐をもつ穿孔円板の被覆からの正則写像についてBig Picard型定理を示す。その帰結として、このクラスで一般化Green--Griffiths--Lang予想を証明し、対数一般型を複数の非双曲性軌跡の真部分性で特徴づける。
abstract_en: >-
  This is the first part of a series of three papers. In this paper, we establish a Big Picard type theorem for holomorphic maps $f:Y \to X$, where $Y$ is a ramified covering of the punctured disc $\mathbb{D}^*$ with small ramification and $X$ is a complex quasi-projective variety of log-general type and of maximal quasi-Albanese dimension. As a byproduct, we prove the generalized Green-Griffiths-Lang conjecture for such $X$. This paper summarizes the parts of the three-paper series that are based primarily on Nevanlinna theory.
summary_en: ""
abstract_ja: >-
  3部作の第1部であり、小さい分岐をもつ穿孔円板の被覆 $Y$ から、対数一般型かつ最大準Albanese次元の複素準射影多様体 $X$ への正則写像に対するBig Picard型定理を確立する。副産物として、そのような $X$ に対する一般化Green--Griffiths--Lang予想を証明する。本稿は3部作のうち主にNevanlinna理論に基づく部分をまとめたものである。
abstract_source_url: "https://arxiv.org/abs/2511.04405"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.04405](https://arxiv.org/abs/2511.04405)
- **著者:** Benoît Cadorel, Ya Deng, Katsutoshi Yamanoi
- **初回投稿日・最終更新日:** 2025年11月6日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG), Complex Variables (math.CV)
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

一般化Green--Griffiths--Lang予想は、滑らかな準射影多様体が対数一般型であることを、半Abel多様体からの写像、整曲線、非対数一般型部分多様体、穿孔円板からの本質的特異点をもつ写像が作る各「特殊集合」の非稠密性と結び付ける。

本論文は、準Albanese写像が像へ生成有限である最大準Albanese次元の場合を扱う。中心となるTheorem Aは、穿孔円板の適切な分岐被覆上の正則写像にも適用できるBig Picard型延長定理である。

単なる穿孔円板を選べば擬Picard双曲性が従い、さらに代数幾何的な構造結果と組み合わせることで、一般化Green--Griffiths--Lang予想に現れる五条件の同値性を得る。コンパクトな最大Albanese次元の場合の既知結果を非コンパクト設定へ拡張する点が主な新規性である。

## 背景と問題設定

$X$ の準Albanese写像 $\alpha:X\to A(X)$ が像へ生成有限、同値に半Abel多様体 $A$ への射 $a:X\to A$ が存在して $\dim X=\dim a(X)$ となるとき、$X$ は最大準Albanese次元をもつ。論文は複数の特殊集合を比較し、特に穿孔円板からの本質的特異点をもつ正則写像の像が作る集合 $\operatorname{Sp}_p(X)$ を用いる。

## 主結果

### Big Picard型延長定理（Theorem A）

$X$ を対数一般型の滑らかな準射影多様体とし、$\dim X=\dim a(X)$ となる半Abel多様体への射を仮定する。このとき真のZariski閉集合 $\Xi\subsetneq X$ が存在する。$\pi:Y\to\mathbb C_{>\delta}$ が固有全射で、$f:Y\to X$ が $f(Y)\not\subset\Xi$ を満たし、Nevanlinna理論の記号で

$$
N_{\mathrm{ram}\,\pi}(r)=O(\log r)+o(T_f(r))\,\Vert
$$

なら、$f$ は無限遠上に本質的特異点をもたず、適切なコンパクト化へ延長する。

### 一般化Green--Griffiths--Lang予想（Theorem C）

最大準Albanese次元の滑らかな準射影多様体 $X$ について、対数一般型、強対数一般型、擬Picard双曲性、擬Brody双曲性、および $\operatorname{Sp}_{\mathrm{sab}}(X)\subsetneq X$ は互いに同値である。

## 証明の見取り図

Theorem Aの証明は、非コンパクトだがZariski稠密な整曲線を扱う先行手法と、コンパクトだが非稠密像も扱う先行手法をNevanlinna理論によって接続する。対数微分補題、弱い切断から切断レベル1へ至る第二主要定理型評価、高余次元部分多様体との交差評価を組み合わせる。Theorem Cでは、対数Kodaira次元0の最大準Albanese次元多様体の構造を先に調べ、Theorem Aが与える解析的含意を他の既知の含意と結ぶ。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.04405](https://arxiv.org/abs/2511.04405)
- **Introduction:** Section 0, pp. 1–4
- **Introduction中の主要定理:** Theorems A, B, C
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
