---
layout: paper
title: 'Weak solutions of the generalized Monge-Amp\`ere equation and the supercritical deformed Hermitian-Yang-Mills equation: boundary cases'
title_ja: "一般化Monge--Ampère方程式と超臨界dHYM方程式の境界類における弱解"
authors: "Rei Murakami"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove the existence and uniqueness of weak solutions for the generalized Monge-Ampère equation
  and the supercritical deformed Hermitian-Yang-Mills equation in cohomology classes lying on the
  boundary of the solvable region. Moreover, we prove that the associated geometric flows converge to
  the weak solutions in the sense of currents. The proof combines viscosity-theoretic and
  pluripotential-theoretic techniques.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2605.29258v1"
arxiv_url: "https://arxiv.org/abs/2605.29258v1"
arxiv_submitted: "2026-05-28"
arxiv_updated: "2026-05-28"
summary: >-
  可解領域の境界にあるコホモロジー類に対し、一般化Monge--Ampère方程式と超臨界deformed Hermitian--Yang--Mills方程式の弱解の存在・一意性を示す。さらに対応する幾何学的フローがカレントの意味で弱解へ収束することを証明し、境界で失われる滑らかな可解性を非多重極積で補う。
abstract_en: >-
  We prove the existence and uniqueness of weak solutions for the generalized Monge-Amp\`ere equation and the supercritical deformed Hermitian-Yang-Mills equation in cohomology classes lying on the boundary of the solvable region. Moreover, we prove that the associated geometric flows converge to the weak solutions in the sense of currents. The proof combines viscosity-theoretic and pluripotential-theoretic techniques.
summary_en: ""
abstract_ja: >-
  可解領域の境界に位置するコホモロジー類について、一般化Monge--Ampère方程式および超臨界deformed Hermitian--Yang--Mills方程式の弱解が存在し一意であることを証明する。また、対応する幾何学的フローがカレントとしてその弱解へ収束することも示す。証明では粘性解理論と多重ポテンシャル理論を組み合わせる。
abstract_source_url: "https://arxiv.org/abs/2605.29258v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.29258v1](https://arxiv.org/abs/2605.29258v1)
- **著者:** Rei Murakami
- **初回投稿日・最終更新日:** 2026年5月28日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

複素Monge--Ampère方程式、$J$-方程式、deformed Hermitian--Yang--Mills（dHYM）方程式の滑らかな可解性は、微分形式の正値性や交点数の正値性で特徴づけられる。本論文は、その正値性が極限で等号となる「可解領域の境界」で、滑らかな解に代わる標準的な弱解を構成する。

一般化Monge--Ampère（gMA）方程式については、nefな類 $[\chi]$ と半正値形式 $\omega$ を内側の可解データで近似できるという境界仮定の下で、非多重極積により方程式と退化した $C$-subsolution 条件を同時に満たす $\chi$-psh関数の存在と一意性を得る。この枠組みは通常のMonge--Ampère方程式と $J$-方程式を含む。

同じ考えを超臨界位相のdHYM方程式へ移し、近似可能な境界類に一意な弱解を与える。さらに、係数や形式がKählerである場合、mixed Hessian flowとdHYM flowがそれぞれ弱解へカレントの意味で収束する。

結果は、境界でも任意の弱解概念を許すのではなく、方程式に加えて退化楕円性を表す不等式を課す点に特徴がある。著者は $J$-方程式について既存予想よりこの一意性条件がやや強いことも明記している。

## 背景と問題設定

$X$ を $n$ 次元コンパクトKähler多様体、$[\chi]$ をnef類、$\omega$ を多重極集合の外で正となる閉半正値 $(1,1)$-形式とする。gMA方程式は、非負定数 $c_k$ と関数 $c_0$ に対し概略

$$
\langle\chi_\psi^n\rangle
=\sum_{k=0}^{n-1}c_k\langle\chi_\psi^k\wedge\omega^{n-k}\rangle
$$

と書かれる。境界仮定は、$[\chi]$、$\omega$、$c_k$ をKählerで厳密に正の数値条件を満たすデータ $[\chi_i]$、$\omega_i$、$c_{k,i}$ で単調近似できることを要求する。各近似問題は既知の数値的可解性判定により滑らかな解を持つが、その極限の制御が問題になる。

## 主結果

### gMA弱解の存在と一意性（Theorem 1.7）

Setup 1.1と境界のAssumption 1.4の下で、$\sup_X\psi=0$ を満たす $\chi$-psh関数 $\psi$ がただ一つ存在し、上のgMA方程式と、$p=1,\ldots,n-1$ に対する

$$
\frac{n!}{p!}\langle\chi_\psi^p\rangle
-\sum_{k=n-p}^{n-1}c_k\frac{k!}{(k-n+p)!}
\langle\chi_\psi^{k-n+p}\wedge\omega^{n-k}\rangle\geq 0
$$

を満たす。後者が境界での退化 $C$-subsolution 条件であり、一意性の定式化にも不可欠である。

### mixed Hessian flowの収束（Theorem 1.10）

$\omega,\chi$ がKählerで $c_0$ が非負定数、すべての部分多様体に対する数値条件が非負なら、mixed Hessian flowはTheorem 1.7の弱解へカレントとして収束する。

### dHYM弱解とフロー収束（Theorems 1.15, 1.18）

超臨界位相 $0<\theta<\pi$ とAssumption 1.13の近似安定性の下で、$\sup_X\psi=0$ を満たす一意なquasi-psh関数が存在し、

$$
\operatorname{Re}\langle(\alpha_\psi+\sqrt{-1}\omega)^n\rangle
-\cot\theta\,\operatorname{Im}\langle(\alpha_\psi+\sqrt{-1}\omega)^n\rangle=0
$$

と指定された閉じた楕円性錐の条件を満たす。さらに近似で $\omega_i=\omega$、$\alpha_i=\alpha$ と取れる場合、dHYM flowはこの弱解へカレントとして収束する。

## 証明の見取り図

近似方程式の解の $L^1$-極限について、まず作用素のsublevel集合の凸性とconvolutionを用い、粘性解の意味でsubsolutionになることを示す。次に退化 $C$-subsolutionに対する質量不等式を確立し、片側不等式を等式へ昇格させる。最後に、総質量を保ちながら右辺を変えたgMA方程式と正則化を使い、凸性から一意性を導く。フローについてはエネルギーの凸性から時間微分の $L^2$-減衰を得て、任意の弱極限へ同じ三段階を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.29258v1](https://arxiv.org/abs/2605.29258v1)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems 1.7, 1.10, 1.15, 1.18
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
