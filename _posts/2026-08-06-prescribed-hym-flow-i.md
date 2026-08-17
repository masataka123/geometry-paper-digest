---
layout: paper
title: "The prescribed Hermitian-Yang-Mills flow I"
title_ja: "指定Hermitian--Yang--Mills flow I"
authors: "Zhiyao Xiong, Xaokui Yang, Shing-Tung Yau"
arxiv_primary_category: "math.DG"
arxiv_categories: [math.DG]
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - hermite-einstein-metrics
arxiv_id: "2606.21062v1"
arxiv_url: "https://arxiv.org/abs/2606.21062v1"
arxiv_submitted: "2026-06-19"
arxiv_updated: "2026-06-19"
summary: >-
  指定Hermitian--Yang--Mills tensor方程式へ向かうflowに放物型比較原理を確立する。適切な上下barrierの間に初期計量があるときの長時間存在と収束、および準正定値の場合の指数収束を導く。
abstract_en: >-
  In this paper, we introduce a broad class of flows, including the prescribed Hermitian-Yang-Mills flow: $$\frac{\partial h}{\partial t}=-\Lambda_{\omega_g}\left(\sqrt{-1} R^h\right)+P$$ where $P\in\Gamma(M,E^*\otimes\bar{E}^*)$ is a prescribed Hermitian tensor associated with a holomorphic vector bundle $E$ over a K\"ahler (or Hermitian) manifold $(M,\omega_g)$. We establish the long-time convergence of the flow to a limiting metric $h_{\infty}$ and use it to solve the prescribed Hermitian-Yang-Mills tensor equation $$\Lambda_{\omega_g}\left(\sqrt{-1} R^{h_\infty}\right)=P, $$ for a general class of prescribed Hermitian tensors $P$. The crucial uniform $C^0$-estimate of $\{h(t)\}$ along the flow is obtained via a parabolic comparison principle.
summary_en: ""
abstract_ja: >-
  正則vector bundleの計量に対する指定Hermitian--Yang--Mills flowを含む広いflowの比較原理を構築する。これにより一様 $C^0$ 評価を得て、準正定値tensorや上下barrierで挟まれる一般のtensorについて長時間存在と収束を証明し、指定tensor方程式を解く。
abstract_source_url: "https://arxiv.org/abs/2606.21062v1"
license_name: "CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.21062v1](https://arxiv.org/abs/2606.21062v1)
- **著者:** Zhiyao Xiong, Xaokui Yang, Shing-Tung Yau
- **初回投稿日:** 2026年6月19日
- **最終更新日:** 2026年6月19日（v1）
- **主分類・副分類:** Differential Geometry (math.DG)
- **ライセンス:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

Calabi--Yau方程式とHermitian--Einstein方程式の双方を念頭に、曲率縮約を所与のHermitian tensor $P$ に一致させる問題をflowで解く。

鍵は、二つの時間依存計量の初期順序と微分不等式が保たれるという放物型比較原理である。これがflow全体の $C^0$ 評価を、定常な上下barrierから直接与える。

準正定値曲率をもつ基準計量がある場合には一意解へ指数的に収束する。より一般に $P$ が非負でなくても上下barrierがあれば、部分列収束によって解を構成する。

## 背景と問題設定

扱うflowと極限方程式は

$$
\frac{\partial h}{\partial t}=-\Lambda_{\omega_g}(\sqrt{-1}R^h)+P,
\qquad
\Lambda_{\omega_g}(\sqrt{-1}R^{h_\infty})=P.
$$

幾何flowでは高階評価へ進む前の一様 $C^0$ 評価が本質的であり、本論文はそのための順序保存原理を中心に据える。

## 主結果

### 放物型比較原理（Theorem 1.1）

compact Hermitian多様体上の二つの計量が初期時刻に順序をもち、対応する時間微分と曲率縮約がIntroductionの式 (1.7) または (1.9) の向きで比較できれば、その順序は存在時間全体で保存される。

### 準正定値の場合の収束（Theorem 1.2）

$E$ に $\Lambda_{\omega_g}(\sqrt{-1}R^{\underline h})$ が準正定値となる計量があるとする。任意の準正定値 $P$ と初期計量に対しflowは全時間存在し、一意な解へ指数的に滑らかに収束する。比較原理で

$$
\underline h\leq h(t)\leq\overline h
$$

を得た後、誤差 $\Lambda_{\omega_g}(\sqrt{-1}R^{h(t)})-P$ の指数減衰を示す。

### 一般tensorとbarrier（Theorem 1.3）

compact Kählerまたはbalanced多様体上で

$$
\underline h\leq\overline h,qquad
\Lambda_{\omega_g}(\sqrt{-1}R^{\underline h})\leq P\leq
\Lambda_{\omega_g}(\sqrt{-1}R^{\overline h})
$$

を満たすbarrierがあれば、その間の初期計量から出るflowは全時間存在する。任意の時刻列から、指定方程式を解く計量へ滑らかに収束する部分列を取れる。この場合、解の一意性は主張されない。

## 証明の見取り図

比較原理でbarrier間の一様評価を得て、局所放物型評価から高階制御と長時間存在を導く。Theorem 1.2では曲率誤差の指数減衰を直接用い、Donaldson functionalを不要にする。一般のTheorem 1.3ではDonaldson型functionalとcompactnessを使って部分列極限を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.21062v1](https://arxiv.org/abs/2606.21062v1)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.3; Corollary 1.4
- **論文構成の説明:** proof outlines, pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0 Universal
- **source_scope:** Abstract and Introduction
