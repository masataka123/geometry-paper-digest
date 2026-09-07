---
layout: paper
title: "On the behavior of Kodaira dimension under smooth morphisms"
title_ja: "滑らかな射における小平次元の振る舞い"
authors: "Mihnea Popa, Christian Schnell"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove several results on the additivity of Kodaira dimension under smooth morphisms of smooth projective varieties.
topic: algebraic-geometry
tags: 
  - birational-geometry
  - minimal-model-program
  - moduli
  - positivity
arxiv_id: "2202.02825v3"
arxiv_url: "https://arxiv.org/abs/2202.02825"
arxiv_submitted: "2022-02-06"
arxiv_updated: "2024-06-05"
summary: >-
  滑らかな射 $f:X\to Y$ に対する小平次元の加法性を調べ、一般型が関与する場合や標準偏極ファイバーの場合に無条件の結果を与える。Campana–Peternell予想の下では逆向き不等式 $\kappa(F)+\kappa(Y)\ge\kappa(X)$ を示し、MMPの予想群から完全な加法性を導く。
abstract_en: >-
  We prove several results on the additivity of Kodaira dimension under smooth morphisms of smooth projective varieties.
summary_en: ""
abstract_ja: >-
  滑らかな射で結ばれた滑らかな射影多様体について、小平次元の加法性を研究する。全空間の次元がファイバー次元と底の次元の上限に達すると底が一般型になることを示すほか、標準偏極ファイバーでは広い範囲で加法性を証明する。一般にはCampana–Peternell予想を仮定して逆向き不等式を得て、MMPの標準予想群の下で完全な等式を導く。
abstract_source_url: "https://arxiv.org/abs/2202.02825"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2202.02825](https://arxiv.org/abs/2202.02825)
- **著者:** Mihnea Popa, Christian Schnell
- **初回投稿日:** 2022-02-06
- **最終更新日:** 2024-06-05
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな射影多様体間の滑らかな代数的ファイバー空間 $f:X\to Y$ について、小平次元が $\kappa(X)=\kappa(F)+\kappa(Y)$ と加法的になるかを調べる。ここで $F$ は一般ファイバーである。

まず $\kappa(F)\ge0$ の下で、$\kappa(X)$ が自明な上界 $\kappa(F)+\dim Y$ に達することと、底 $Y$ が一般型であることが同値だと示す。また全ファイバーが標準偏極され、底が非負小平次元または非有理曲線被覆なら加法性が成立する。

一般の滑らかなファイバー空間ではCampana–Peternell予想を仮定し、飯高予想と逆向きの不等式を得る。したがってMMPのgood minimal modelなどの予想を合わせると完全な加法性が従い、底が曲面の場合などには無条件の系を与える。

## 背景と問題設定

Easy Additionは常に

$$
\kappa(X)\le \kappa(F)+\dim Y
$$

を与え、飯高予想は $\kappa(X)\ge\kappa(F)+\kappa(Y)$ を予想する。滑らかさを仮定すると、変動のHodge理論と弱正値性を用いて反対向きの制約も引き出せる。

論文が用いるCampana–Peternell予想は、$K_Y\sim_{\mathbb Q}A+B$ で $A$ が有効、$B$ が擬有効なら $\kappa(Y)\ge\kappa(A)$ と主張する。これはgood minimal modelの存在から従い、特に $\dim Y\le3$ で利用できる。

## 主結果

### 定理A（底が一般型であるための判定）

$F$ が $\kappa(F)\ge0$ を満たす滑らかな代数的ファイバー空間について、

$$
Y\text{ が一般型}\quad\Longleftrightarrow\quad
\kappa(X)=\kappa(F)+\dim Y
$$

が成り立つ。新しい向きは右辺から左辺を導く部分である。

### 定理B（標準偏極ファイバー）

全ファイバーが標準偏極され、$\kappa(Y)\ge0$ または $Y$ が非有理曲線被覆なら

$$
\kappa(X)=\kappa(F)+\kappa(Y)
$$

が成り立つ。

### 定理Cと系D（条件付き加法性）

Campana–Peternell予想の下で

$$
\kappa(F)+\kappa(Y)\ge\kappa(X)
$$

を得る。飯高予想の既知・予想される逆向き不等式と合わせると、MMPの予想群から滑らかな射に対する小平次元の完全な加法性が従う。

### 定理H（$\kappa(Y)=0$）

$\kappa(Y)=0$ でCampana–Peternell予想が底に成り立てば $\kappa(F)\ge\kappa(X)$ である。さらに $K_Y\sim_{\mathbb Q}0$ なら $\kappa(X)=\kappa(F)$ であり、全ての $m\ge1$ について $P_m(F)\ge P_m(X)$、$Y$ が単連結なら等号が成り立つ。

## 証明の見取り図

Popa–SchnellのHodge module構成とViehweg–Zuoの双曲性的方法を用いる。多重ファイバー積により多重標準束の切断を増幅し、一般化Kodaira–Spencer写像から弱正値な層または余接束のテンソル冪に入るbigな層を得る。Campana–Păunの判定を通じて底の一般型性へ結び付ける。$\kappa(Y)=0$ の場合には追加の解析的正値性結果が必要になる。

## 原論文との対応

- **Abstractページ:** [arXiv:2202.02825](https://arxiv.org/abs/2202.02825)
- **Introduction:** Section A, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems A, B, C, H; Corollary D
- **確認したarXivバージョン:** v3
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
