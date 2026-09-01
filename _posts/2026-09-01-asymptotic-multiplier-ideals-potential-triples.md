---
layout: paper
title: "Adjoint asymptotic multiplier ideal sheaves associated to potential triples"
title_ja: "ポテンシャル三つ組に付随する随伴漸近乗数イデアル層"
authors: "Sung Rak Choi, Sungwook Jang, Donghyeon Kim"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this paper, we explore the geometry of potential triples $(X,Δ,D)$, which by definition consists of a pair $(X,Δ)$ and an $\mathbb{R}$-Cartier pseudoeffective divisor $D$ on $X$. We define and study the asymptotic multiplier ideal sheaf $\mathcal{J}(X,Δ,\lVert D\rVert)$ associated to a potential triple $(X,Δ,D)$. As a first main result, when $D$ is big, we prove that the condition $\mathcal{J}(X,Δ,\lVert D\rVert)=\mathcal{O}_{X}$ is equivalent to the triple $(X,Δ,D)$ being potentially klt, which is a klt analog of the pair $(X,Δ)$. We also study the closed set defined by the ideal sheaf $\mathcal{J}(X,Δ,\lVert D\rVert)$ and prove a Nadel type cohomology vanishing theorem for $\mathcal{J}(X,Δ,\lVert D\rVert)$. As an application of the main result, we prove that we can run the $(K_X+Δ+D)$-MMP with scaling of an ample divisor for a pklt triple $(X,Δ,D)$.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - minimal-model-program
  - positivity
  - multiplier-ideals-extension
arxiv_id: "2311.07441v4"
arxiv_url: "https://arxiv.org/abs/2311.07441"
arxiv_submitted: "2023-11-13"
arxiv_updated: "2025-11-03"
summary: >-
  対 $(X,\Delta)$ と擬有効因子 $D$ からなるpotential tripleに対し、局所特異点と $D$ の大域的非nef性を同時に捉える漸近乗数イデアル層を構成する。$D$ がbigな場合のpotentially klt性の特徴づけ、スケーリング付きMMPの実行可能性、Nadel型消滅定理を示す。
abstract_en: ""
summary_en: >-
  The authors introduce an asymptotic multiplier ideal attached to a pair together with a pseudoeffective divisor, placing singularities and asymptotic positivity in one framework. For a big rational divisor, triviality of this ideal is equivalent to the potential triple being potentially klt and also to the existence of a klt complement. They use this characterization to run a minimal model program for the adjoint divisor of a potentially klt triple. A Nadel-type vanishing statement is also established, with the cohomological range governed by the Iitaka dimension of the divisor.
abstract_ja: >-
  対 $(X,\Delta)$ と擬有効 $\mathbb R$-Cartier因子 $D$ からなるpotential tripleに漸近乗数イデアル層 $\mathcal J(X,\Delta,\lVert D\rVert)$ を付随させる。$D$ がbigなら、この層が構造層に等しいことはpotentially klt性と同値である。さらにpotential non-klt locusとの関係、Nadel型コホモロジー消滅、pklt tripleに対する $(K_X+\Delta+D)$-MMPへの応用を与える。
abstract_source_url: "https://arxiv.org/abs/2311.07441"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2311.07441](https://arxiv.org/abs/2311.07441)
- **著者:** Sung Rak Choi, Sungwook Jang, Donghyeon Kim
- **初回投稿日:** 2023年11月13日
- **最終更新日:** 2025年11月3日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

乗数イデアルは対の局所的な特異点を検出し、漸近乗数イデアルは因子の大域的な非nef性を検出する。本論文はこの二つを一つの枠組みに収めるため、対 $(X,\Delta)$ と擬有効因子 $D$ からなるpotential tripleを扱う。

三つ組に付随する $\mathcal J(X,\Delta,\lVert D\rVert)$ を定義し、$D$ がbigな場合、その自明性がpotentially klt性と同値であることを示す。さらに有効な $D'\sim_{\mathbb R}D$ を加えた対 $(X,\Delta+D')$ がkltとなることとも同値である。

この特徴づけにより、pklt tripleについて $K_X+\Delta+D$ のスケーリング付きMMPを走らせられる。また、$D$ の飯高次元に応じた次数範囲でNadel型消滅定理を得る。

## 背景と問題設定

対 $(X,\Delta)$ の乗数イデアル $\mathcal J(X,\Delta)$ はklt性を特徴づけ、その零点集合はnon-klt locusを与える。他方、滑らかな射影多様体上のbig因子 $D$ に対する $\mathcal J(X,\lVert mD\rVert)$ の族はnef性とnon-nef locusを捉えるが、単一の $\mathcal J(X,\lVert D\rVert)$ がもつ情報は明瞭でなかった。

potential triple $(X,\Delta,D)$ では、素因子 $E$ に沿う対数的不一致と $D$ の漸近付値を組み合わせて

$$
a(E;X,\Delta,D):=A_{X,\Delta}(E)-\sigma_E(D)
$$

を定める。その全素因子にわたる下限が正であるとき三つ組をpotentially klt（pklt）と呼ぶ。

## 主結果

### pklt性の特徴づけ（Theorem 1.1）

$D$ がbigな $\mathbb Q$-因子である三つ組 $(X,\Delta,D)$ について、次の三条件は同値である。

1. $(X,\Delta,D)$ はpkltである。
2. $\mathcal J(X,\Delta,\lVert D\rVert)=\mathcal O_X$ である。
3. $(X,\Delta+D')$ がkltとなる有効因子 $D'\sim_{\mathbb R}D$ が存在する。

第3条件の $D'$ は三つ組のklt complementと呼ばれる。Introductionによれば、証明は付値理論を用い、先行研究の議論を置き換える。

### pklt tripleのMMP（Theorem 1.2）

$D$ が擬有効 $\mathbb Q$-因子であるpklt triple $(X,\Delta,D)$ に対し、ample因子によるスケーリング付きの

$$
(K_X+\Delta+D)\text{-MMP}
$$

を実行できる。これは射影的klt対に対するMMP存在の三つ組版に当たる。

### Nadel型消滅（Theorem 1.3）

$\Delta,D$ が有効 $\mathbb Q$-因子で、Cartier因子 $L$ が $L\sim_{\mathbb Q}K_X+\Delta+D$ を満たすならば

$$
H^q\!\left(X,\mathcal O_X(L)\otimes
\mathcal J(X,\Delta,\lVert D\rVert)\right)=0
\quad\text{for all }q>\dim X-\kappa(D)
$$

が成り立つ。とくに三つ組がpkltで $D$ がbigなら、すべての $q>0$ で $H^q(X,\mathcal O_X(L))=0$ を得る。

## 証明の見取り図

Introductionによれば、Theorem 1.1は漸近付値とlog discrepancyを結ぶ付値理論に基づく。理想層の構成では線形系の自由部分と固定部分を分離し、得られる理想層族の一意な最大元を取る。このpklt性の判定を通常のklt対へ移すことでMMPを導く。消滅定理は代数的設定におけるNadel型の議論として構成され、解析的な最小特異計量の乗数イデアルに関する既知の消滅結果を対の設定へ拡張する。

## 原論文との対応

- **Abstractページ:** [arXiv:2311.07441](https://arxiv.org/abs/2311.07441)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.3
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
