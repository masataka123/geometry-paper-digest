---
layout: paper
title: "Linear Chern-Hopf-Thurston conjecture"
title_ja: "線形表現をもつ基本群とChern–Hopf–Thurston予想"
authors: "Ya Deng, Botong Wang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
  - math.GT
arxiv_abstract: >-
  If $X$ is a closed $2n$-dimensional aspherical manifold, i.e., the universal cover of $X$ is contractible, then the Chern-Hopf-Thurston conjecture predicts that $(-1)^nχ(X)\geq 0$. We prove this conjecture when $X$ is a complex projective manifold whose fundamental group admits an almost faithful linear representation over any field. In fact, we prove a much stronger statement that if $X$ is a complex projective manifold with large fundamental group and $π_1(X)$ admits an almost faithful linear representation, then $χ(X, \mathcal{P})\geq 0$ for any perverse sheaf $\mathcal{P}$ on $X$. To prove this, we introduce a vanishing cycle functor of multivalued one-forms and apply techniques from non-abelian Hodge theory, both in archimedean and non-archimedean settings. These techniques allow us to deduce the desired positivity from the geometric properties of pure and mixed period maps.
topic: algebraic-geometry
tags:
  - fundamental-groups
  - higgs-nonabelian-hodge
arxiv_id: "2405.12012v3"
arxiv_url: "https://arxiv.org/abs/2405.12012"
arxiv_submitted: "2024-05-20"
arxiv_updated: "2024-09-27"
summary: >-
  大きな基本群と任意標数の体上のほとんど忠実な線形表現をもつ複素射影多様体について、perverse sheafのEuler標数の非負性を証明する。これは非球面的多様体に対するChern–Hopf–Thurston予想を含み、多価1形式の消滅サイクルと純・混合周期写像を結び付ける結果である。
abstract_en: ""
summary_en: >-
  The paper proves an Euler-characteristic positivity theorem for projective manifolds carrying a large linear representation over an arbitrary field. The conclusion applies to every perverse sheaf and yields the Chern–Hopf–Thurston inequality when the fundamental group is large and the representation is almost faithful. The argument converts the problem into positivity of conormal intersections. It combines multivalued one-forms with pure and mixed period maps through archimedean and non-archimedean Hodge theory.
abstract_ja: >-
  閉じた非球面的な偶数次元多様体に対するChern–Hopf–Thurston予想は、符号を補正したEuler標数の非負性を主張する。本論文は、複素射影多様体の基本群が任意標数の体上でほとんど忠実な線形表現をもち、かつ基本群が大きい場合にこの予想を証明する。さらに任意のperverse sheafに対するEuler標数の非負性へ強化し、その背後にある余法束サイクルの交点数の非負性を示す。
abstract_source_url: "https://arxiv.org/abs/2405.12012"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2405.12012v3](https://arxiv.org/abs/2405.12012)
- **著者:** Ya Deng, Botong Wang
- **初回投稿日:** 2024年5月20日
- **最終更新日:** 2024年9月27日
- **主分類・副分類:** math.AG（主分類）, math.DG, math.GT
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Chern–Hopf–Thurston予想は、閉じた$2n$次元非球面的多様体$X$に対して

$$
(-1)^n\chi(X)\geq 0
$$

を予想する。高次元では広く未解決であり、複素射影多様体の場合にも基本群と微分幾何を結ぶ問題である。

著者らは射影多様体$X$と任意の体$K$上の大きな表現$\rho:\pi_1(X)\to\mathrm{GL}_N(K)$を仮定し、任意のperverse sheaf $\mathcal P$について$\chi(X,\mathcal P)\geq0$を示す。大きな基本群とほとんど忠実な表現があれば仮定を満たすため、上の予想が従う。

より強い核心は、任意の既約部分多様体$Z\subset X$の余法束サイクルに対する交点非負性である。perverse sheafの特性サイクルの有効性と大域指数定理が、これをEuler標数の非負性へ移す。

## 背景と問題設定

表現$\rho$が「大きい」とは、任意の既約部分多様体$Z\subset X$について、正規化から誘導される基本群の像が$\rho$の下で無限になることをいう。これは非球面性そのものより表現論的であり、線形Shafarevich予想で発達した非可換Hodge理論を利用可能にする。

従来は複素数上の半単純・コホモロジー的剛直な表現などに結果が限られていた。本論文は表現の体を任意とし、半単純性や剛直性を課さない。

## 主結果

### 主定理（Theorem 1.3）

射影多様体$X$が任意の体$K$上の大きな表現$\rho:\pi_1(X)\to\mathrm{GL}_N(K)$をもつなら、任意のperverse sheaf $\mathcal P$に対して

$$
\chi(X,\mathcal P)\geq0
$$

が成り立つ。特に$(-1)^{\dim X}\chi(X)\geq0$である。

### 幾何学的強化（Theorem 1.5）

任意の閉既約部分多様体$Z\subset X$について、余法束$T_Z^*X$と零切断$T_X^*X$の交点数は

$$
[T_Z^*X]\cdot[T_X^*X]\geq0
$$

となる。特性サイクルを余法束サイクルの正係数和として表し、大域指数定理を使うことで前の定理が従う。

## 証明の見取り図

多価1形式に作用する消滅サイクル関手を導入し、交点数を保ちながら$Z$をより小さい部分多様体へ帰着する。正標数では点に至るまで帰着できる。複素数上の半単純な場合は純Hodge構造の周期領域の曲率を用い、非半単純な場合は実混合Hodge構造の周期写像と半単純化に対応する純周期写像を同時に扱う。後者では混合周期領域の曲率不足とモノドロミー作用の非離散性を補う技術的命題が要点となる。

## 原論文との対応

- **Abstractページ:** [arXiv:2405.12012](https://arxiv.org/abs/2405.12012)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.5; Corollary 1.4
- **論文構成の説明:** Section 1.1, pp. 3–4
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
