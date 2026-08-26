---
layout: paper
title: "Non-algebraicity of non-abundant foliations and abundance for adjoint foliated structures"
title_ja: "非豊富葉層の非代数性と随伴葉層構造の豊富性"
authors: "Jihao Liu, Zheng Xu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DS
arxiv_abstract: >-
  Assuming the abundance conjecture in dimension $d$, we establish a non-algebraicity criterion of foliations: any log canonical foliation of rank $\le d$ with $\nu\neq\kappa$ is not algebraically integrable, answering question of Ambro--Cascini--Shokurov--Spicer. Under the same hypothesis, we prove abundance for klt algebraically integrable adjoint foliated structures of dimension $\le d$ and show the existence of good minimal models or Mori fiber spaces. In particular, when $d=3$, all these results hold unconditionally. Using similar arguments, we solve a problem proposed by Lu and Wu on abundance of surface adjoint foliated structures that are not necessarily algebraically integrable.
topic: algebraic-geometry
tags:
  - foliations
  - birational-geometry
  - minimal-model-program
arxiv_id: "2510.04419v2"
arxiv_url: "https://arxiv.org/abs/2510.04419"
arxiv_submitted: "2025-10-06"
arxiv_updated: "2025-10-09"
summary: >-
  通常の豊富性予想を仮定し、数値次元と小平次元が一致しない対数的標準葉層は代数的可積分でないことを示す。さらに代数的可積分な随伴葉層構造の豊富性と良い極小モデルまたは森ファイバー空間の存在を導き、階数・次元3以下では無条件の結論を得る。
abstract_en: ""
summary_en: >-
  The paper connects abundance with algebraic integrability for foliations. Conditional on the ordinary abundance conjecture in dimension $d$, a log canonical foliation of rank at most $d$ whose numerical and Kodaira dimensions differ cannot be algebraically integrable. The same input yields abundance and terminating birational models for algebraically integrable adjoint foliated structures. In dimension three the relevant abundance theorem makes these conclusions unconditional, while a separate surface result also covers foliations without algebraic integrability.
abstract_ja: >-
  次元$d$の豊富性予想の下で、階数が$d$以下で数値次元$\nu$と小平次元$\kappa$が異なる対数的標準葉層は代数的可積分でない。さらに同じ仮定の下で、次元$d$以下のklt代数的可積分随伴葉層構造に対する豊富性、および良い極小モデルまたは森ファイバー空間の存在を示す。$d=3$ではこれらが無条件に成り立ち、曲面については代数的可積分性を仮定しない随伴葉層構造の問題も解決する。
abstract_source_url: "https://arxiv.org/abs/2510.04419"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "http://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.04419](https://arxiv.org/abs/2510.04419)
- **著者:** Jihao Liu, Zheng Xu
- **初回投稿日:** 2025年10月6日
- **最終更新日:** 2025年10月9日（v2）
- **主分類・副分類:** math.AG（主分類）, math.DS
- **ライセンス:** [CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

葉層の双有理分類では、葉が代数多様体をなすかという代数的可積分性と、標準因子の数値次元$\nu$と小平次元$\kappa$が一致する豊富性が中心問題となる。多様体の場合と異なり、葉層では曲面上でさえ豊富性が破れる例がある。

本論文は通常の多様体に対する次元$d$の豊富性予想を仮定し、$\nu(\mathcal F)\ne\kappa(\mathcal F)$である対数的標準葉層$\mathcal F$は、階数が$d$以下なら代数的可積分でないことを示す。この結論は、非豊富性を葉の非代数性へ結び付ける判定法である。

また$K_t=tK_{\mathcal F}+(1-t)K_X$で定まる随伴葉層構造を扱い、代数的可積分な場合には$K_t$の豊富性を証明する。$t<1$では$K_t$-MMPが良い極小モデルまたは森ファイバー空間で停止する。

通常の豊富性予想は次元3以下で既知であるため、階数3以下の非代数性判定などは無条件となる。曲面では分類理論を併用し、代数的可積分性を仮定せずに随伴葉層構造の豊富性も得る。

## 背景と問題設定

葉層$\mathcal F$が代数的可積分であるとは、一般の葉が代数的であり、支配的写像のファイバー方向から葉層が生じることをいう。もう一方の問題は$K_{\mathcal F}$にMMPを施し、$\nu(\mathcal F)$と$\kappa(\mathcal F)$で分類することである。しかし葉層には$K_{\mathcal F}$がbigかつnefでも半豊富でない例や、$\nu=1$かつ$\kappa=-\infty$の例がある。

随伴構造では純粋な$K_{\mathcal F}$の代わりに

$$
K_t=tK_{\mathcal F}+(1-t)K_X,\qquad t\in[0,1]
$$

を考える。$t<1$では多様体の標準因子の寄与が入り、双有理幾何が改善するという着想が主結果を支える。

## 主結果

### 非豊富葉層の非代数性（Theorem 1.1）

次元$d$の豊富性予想を仮定する。階数$\le d$の対数的標準葉層$\mathcal F$が

$$
\nu(\mathcal F)\ne\kappa(\mathcal F)
$$

を満たすなら、$\mathcal F$は代数的可積分でない。次元3以下の豊富性が既知であることから、階数3以下ではこの結論が無条件に成り立つ（Corollary 1.2）。

### 随伴葉層構造の豊富性とMMP（Theorem 1.3）

$X$を次元$\le d$の滑らかな射影多様体、$\mathcal F$を対数的標準かつ代数的可積分な葉層とする。任意の$t\in[0,1]$について

$$
\nu(K_t)=\kappa_\iota(K_t)
$$

が成り立ち、有理数$t$では$\kappa_\iota(K_t)=\kappa(K_t)$である。さらに$t<1$なら$K_t$-MMPを走らせ、良い極小モデルまたは森ファイバー空間で停止できる。

### 曲面の場合（Theorem 1.4）

$X$を滑らかな射影曲面、$\mathcal F$を標準葉層、$t\in[0,1)$とすると、代数的可積分性なしに$\nu(K_t)=\kappa_\iota(K_t)$が成り立つ。$K_t$が擬有効なら良い極小モデルも存在する。特に$t=1/2$はLü–Wuの問題に否定的回答を与える。

## 証明の見取り図

非代数性定理は対偶方向に、代数的可積分な葉層を安定族と一般化対へ還元し、標準束公式と$b$-半豊富性を用いて$K_{\mathcal F}$の豊富性を導く。随伴構造については、ある係数$s$でnefかつ豊富なモデルが得られたとき、より小さい係数$s'$の標準因子をklt一般化対の構造へ移し、通常の豊富性予想を適用する。係数区間を開閉する議論とスケーリング付きMMPの停止を組み合わせ、所望の$t$まで結論を伝播させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2510.04419](https://arxiv.org/abs/2510.04419)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollary 1.2, Theorem 1.3, Theorem 1.4
- **論文構成の説明:** Introduction末尾, p. 5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
