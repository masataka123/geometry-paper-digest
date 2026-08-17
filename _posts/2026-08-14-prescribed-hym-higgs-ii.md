---
layout: paper
title: "Existence of Hermitian metrics with prescribed Hermitian-Yang-Mills tensors II"
title_ja: "所定のHermitian–Yang–Millsテンソルを持つHermitian計量の存在 II"
authors: "Jiaxuan Fan, Mingwei Wang, Xiaokui Yang, Shing-Tung Yau"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we solve the prescribed Hermitian-Yang-Mills tensor problem for Higgs bundles over
  compact complex manifolds. Let $ (E,θ) $ be a Higgs bundle over a compact Hermitian manifold
  $(M,ω_g) $. Suppose that there exists a smooth Hermitian metric $ h_0 $ on $E$ such that the
  Hermitian-Yang-Mills tensor $ Λ_{ω_g}\left(\sqrt{-1} R^{D^{h_0}}\right) $ of the Higgs connection is
  positive definite. Then for any Hermitian positive definite tensor $ P\in Γ\left(M,E^*\otimes \bar
  E^*\right) $, there exists a unique smooth Hermitian metric $ h $ on $E$ such that $$Λ_{ω_g}
  \left(\sqrt{-1} R^{D^h}\right)=P.$$ We also establish quantitative Chern number inequalities for
  Higgs bundles.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - hermite-einstein-metrics
  - curvature
  - higgs-nonabelian-hodge
arxiv_id: "2604.02679v1"
arxiv_url: "https://arxiv.org/abs/2604.02679"
arxiv_submitted: "2026-04-03"
arxiv_updated: "2026-04-03"
summary: >-
  コンパクトHermitian多様体上のHiggs束について、ある計量のHermitian–Yang–Mills–Higgsテンソルが正定値なら、任意に指定した正定値Hermitianテンソルを曲率縮約として持つ計量が一意に存在する。比較定理を一意性の核とし、可積分Higgs束に対する定量的Chern数不等式も導く。
abstract_en: >-
  In this paper, we solve the prescribed Hermitian-Yang-Mills tensor problem for Higgs bundles over compact complex manifolds. Let $ (E,θ) $ be a Higgs bundle over a compact Hermitian manifold $(M,ω_g) $. Suppose that there exists a smooth Hermitian metric $ h_0 $ on $E$ such that the Hermitian-Yang-Mills tensor $ Λ_{ω_g}\left(\sqrt{-1} R^{D^{h_0}}\right) $ of the Higgs connection is positive definite. Then for any Hermitian positive definite tensor $ P\in Γ\left(M,E^*\otimes \bar E^*\right) $, there exists a unique smooth Hermitian metric $ h $ on $E$ such that $$Λ_{ω_g} \left(\sqrt{-1} R^{D^h}\right)=P.$$ We also establish quantitative Chern number inequalities for Higgs bundles.
summary_en: ""
abstract_ja: >-
  コンパクト複素多様体上のHiggs束に対する所定Hermitian–Yang–Millsテンソル問題を解く。正定値なHermitian–Yang–Mills–Higgsテンソルを与える初期計量が存在すれば、任意の正定値Hermitianテンソル $P$ に対し、そのテンソルをHiggs接続の曲率縮約として実現する滑らかなHermitian計量が一意に存在する。またHiggs束の定量的Chern数不等式も確立する。
abstract_source_url: "https://arxiv.org/abs/2604.02679v1"
license_name: "Creative Commons Zero v1.0 Universal (CC0 1.0)"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.02679v1](https://arxiv.org/abs/2604.02679v1)
- **著者:** Jiaxuan Fan, Mingwei Wang, Xiaokui Yang, Shing-Tung Yau
- **初回投稿日・最終更新日:** 2026年4月3日（v1）
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

Calabi–Yau定理は第一Chern類を表す実 $(1,1)$-形式をRicci曲率として実現する。本論文はそのベクトル束版として、Higgs接続の曲率を基底計量で縮約したHermitian–Yang–Mills–Higgsテンソルを任意の正定値テンソルに指定する問題を扱う。

コンパクトHermitian多様体上のHiggs束 $(E,\theta)$ に、正定値な曲率縮約を与える初期Hermitian計量 $h_0$ が一つ存在すると仮定する。このとき任意の正定値Hermitianテンソル $P$ を実現する滑らかな計量 $h$ が存在し、しかも一意である。Kähler性は仮定せず、Higgs場とHermitian捩率が同時に現れる状況を含む。

一意性の中心には二つの計量の曲率縮約を順序比較すると計量自体も同じ順序で比較できる定理がある。$\theta=0$ とすれば通常の正則ベクトル束とChern接続に対する所定Hermitian–Yang–Millsテンソル問題が帰結する。

さらにコンパクトKähler多様体上の可積分Higgs束について、曲率縮約を二つの定数 $a,b$ で挟むとChern数の組合せを $(b-a)^2$ で評価する定量的不等式を示す。

## 背景と問題設定

Higgs接続は

$$
D^h=\nabla^h+\theta+\theta_h^*
$$

で定義され、その曲率を $R^{D^h}$ と書く。通常のHermitian–Einstein方程式は曲率縮約を計量の定数倍にするが、本論文はより一般の正定値テンソル $P$ を指定する。

## 主結果

### 所定テンソルの存在と一意性（Theorem 1.1）

$(E,\theta)$ をコンパクトHermitian多様体 $(M,\omega_g)$ 上のHiggs束とする。滑らかなHermitian計量 $h_0$ が存在して

$$
\Lambda_{\omega_g}\!\left(\sqrt{-1}R^{D^{h_0}}\right)>0
$$

を満たすと仮定する。このとき任意の正定値Hermitianテンソル $P$ に対し、

$$
\Lambda_{\omega_g}\!\left(\sqrt{-1}R^{D^h}\right)=P
$$

を満たす滑らかなHermitian計量 $h$ が一意に存在する。Introductionは、初期正値性をGauduchon多様体上の最小固有値の積分正値性まで弱められることも述べる。

### 比較原理（Theorem 1.3）

$h,h_0$ の曲率縮約が

$$
\Lambda_{\omega_g}\sqrt{-1}R^{D^{h_0}}>0,
\qquad
\Lambda_{\omega_g}\sqrt{-1}R^{D^h}
\leq \Lambda_{\omega_g}\sqrt{-1}R^{D^{h_0}}
$$

を満たせば $h\leq h_0$ である。これがTheorem 1.1の一意性を与える。

### 定量的Chern数不等式（Theorem 1.5）

$(M,\omega_g)$ をコンパクトKähler多様体、$(E,\theta)$ を階数 $r$ の可積分Higgs束とする。ある $h_0$ と定数 $a,b$ について

$$
a h_0\leq\Lambda_{\omega_g}\!\left(\sqrt{-1}R^{D^{h_0}}\right)\leq b h_0
$$

なら、

$$
\int_M\bigl((r-1)c_1^2(E)-2r c_2(E)\bigr)\wedge\omega_g^{n-2}
\leq \frac{r(r-1)(b-a)^2}{8\pi^2n^2}\int_M\omega_g^n
$$

が成り立つ。曲率縮約の振れ幅をChern数の定量評価へ結び付ける。

## 証明の見取り図

Introductionは、Higgs接続が一般に計量接続でないこと、Hermitian多様体の捩率とHiggs場が曲率制御を難しくすること、Kähler恒等式がないため線形化した楕円系の単射性に繊細な議論が要ることを主要障害として挙げる。先行する正則ベクトル束版の連続法・比較法をHiggs束へ拡張し、比較定理で一意性を、精密な一様評価と線形化の解析で存在を支える。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.02679v1](https://arxiv.org/abs/2604.02679v1)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.5; Corollaries 1.2, 1.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0
- **source_scope:** Abstract and Introduction
