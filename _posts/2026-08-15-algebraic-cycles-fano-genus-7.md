---
layout: paper
title: "Algebraic cycles and Fano threefolds of genus 7"
title_ja: "種数7の Fano 三次元多様体と代数的サイクル"
authors: "Robert Laterveer"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $Y$ be a very general prime Fano threefold of genus 7. We exhibit an explicit 2-cycle on
  $Y\times Y$ that is Abel-Jacobi trivial but non-torsion in the Chow group $A^4(Y\times Y)$. As a
  consequence, $Y$ does not admit a multiplicative Chow-Künneth decomposition, in the sense of
  Shen-Vial. We also show that any Fano threefold has a multiplicative Chow-Künneth decomposition
  modulo algebraic equivalence.
topic: algebraic-geometry
tags:
  - fano-varieties
  - algebraic-cycles-enumerative
arxiv_id: "2608.12950v1"
arxiv_url: "https://arxiv.org/abs/2608.12950"
arxiv_submitted: "2026-08-13"
arxiv_updated: "2026-08-13"
summary: >-
  非常に一般の種数7の素 Fano 三次元多様体について、Abel--Jacobi 写像では消えるが Chow 群では非零となる具体的なサイクルを構成する。これにより Shen--Vial の乗法的 Chow--Künneth 分解が存在しないことを示す一方、代数的同値を法とすれば任意の Fano 三次元多様体にその分解が存在することも証明する。
abstract_en: ""
summary_en: >-
  The paper studies multiplicative splittings of Chow rings for Fano threefolds. For a very general prime Fano threefold of genus seven, it writes down a cycle on the square that vanishes under the Abel--Jacobi invariant but remains nonzero in the rational Chow group. This cycle obstructs a multiplicative Chow--Künneth decomposition and supplies a negative answer to a previously posed question in Picard rank one. In contrast, after passing from rational to algebraic equivalence, every Fano threefold is shown to possess such a decomposition.
abstract_ja: >-
  非常に一般の種数7の素 Fano 三次元多様体 $Y$ に対し、$Y\times Y$ 上に Abel--Jacobi 自明だが Chow 群 $A^4(Y\times Y)$ では非零となる明示的な2次元サイクルを与える。その帰結として $Y$ は Shen--Vial の意味で乗法的 Chow--Künneth 分解をもたない。他方、代数的同値を法とした Chow 群では、任意の Fano 三次元多様体が乗法的 Chow--Künneth 分解をもつことを示す。
abstract_source_url: "https://arxiv.org/abs/2608.12950"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.12950](https://arxiv.org/abs/2608.12950)
- **著者:** Robert Laterveer
- **初回投稿日・最終更新日:** 2026年8月13日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

滑らかな射影多様体の Chow 群は交叉積によって環をなす。K3 曲面やアーベル多様体では、この環にコホモロジーとよく整合する乗法的な分解が存在する。Shen--Vial の乗法的 Chow--Künneth 分解（MCK 分解）は、Beauville の「分裂性」を具体化する枠組みである。

Picard 数1の Fano 三次元多様体が常に MCK 分解をもつかという問いには、三次三次元多様体や二つの二次超曲面の完全交叉、種数8・10の素 Fano 三次元多様体など肯定例が知られていた。本論文は、非常に一般の種数7の素 Fano 三次元多様体を用いて初めて否定的な答えを与える。

障害は $Y\times Y$ 上の具体的なサイクル $Z_Y$ である。これは Abel--Jacobi 自明であるにもかかわらず有理係数 Chow 群では非零であり、その非消滅が MCK 分解を排除する。一般論から存在するサイクルではなく、式で書ける例を得る点も結果の重要な特徴である。

一方、同値関係を有理同値から代数的同値へ弱めると状況は反転する。論文は任意の Fano 三次元多様体が代数的同値を法として MCK 分解をもつことを示し、種数7の場合の障害がどの同値関係で検出されるかを明確にする。

## 背景と問題設定

$\mathbb Q$ 係数 Chow 群を $A^i(Y)=\operatorname{CH}^i(Y)_{\mathbb Q}$ と書く。MCK 分解は Chow--Künneth 射影子が交叉積と両立することを要求するため、単にコホモロジーを次数別に分けるより強い条件である。

従来、Picard 数が大きい Fano 三次元多様体には $A^1(Y)\cdot A^1(Y)\subset A^2(Y)$ がコホモロジーへ単射にならないという Beauville の障害があった。しかし Picard 数1ではこの障害が消えるため、別種のサイクルを見つける必要があった。本論文は障害を余次元4の $A^4(Y\times Y)$ に求める。

## 主結果

### 主定理（Theorem 3.1）

非常に一般の種数7の素 Fano 三次元多様体 $Y$ と反標準因子 $H=-K_Y\in A^1(Y)$ をとる。$p_1,p_2:Y\times Y\to Y$ を射影、$\Delta_Y$ を対角とすると、

$$
\begin{aligned}
Z_Y:=\Delta_Y\cdot p_1^*(H)-\frac{1}{12}\Bigl(&p_1^*(H)\cdot p_2^*(H^3)
+p_1^*(H^2)\cdot p_2^*(H^2)\\
&+p_1^*(H^3)\cdot p_2^*(H)\Bigr)\in A^4(Y\times Y)
\end{aligned}
$$

は Abel--Jacobi 自明だが非零である。したがって $Y$ は MCK 分解をもたない。「非常に一般」という仮定と、結論が単なるホモロジー的非自明性ではなく Abel--Jacobi でも見えない非消滅であることが要点である。

### 代数的同値を法とする肯定結果（Proposition 4.1）

任意の Fano 三次元多様体は、代数的同値を法とする MCK 分解をもつ。曲線では非常に一般の種数4以上の曲線がこの弱い意味でも MCK 分解をもたないため、Fano 三次元多様体との対照が際立つ。

## 証明の見取り図

Introduction が強調する主定理の核心は、種数7の Fano 三次元多様体に双対な曲線へ問題を移すことである。$Z_Y$ の非消滅を、その曲線の平方上の Faber--Pandharipande サイクルの既知の非自明性に結び付ける。この方法により、Picard 数1では使えない因子積の障害とは異なる障害を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.12950](https://arxiv.org/abs/2608.12950)
- **Introduction:** Section 1, pp. 1--4
- **Introduction中で言及された主要定理番号:** Theorem 3.1; Proposition 4.1; Corollary 4.5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
