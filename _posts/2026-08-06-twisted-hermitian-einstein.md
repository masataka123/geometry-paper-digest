---
layout: paper
title: "Existence of twisted Hermitian-Einstein metrics on unstable vector bundles"
title_ja: "不安定ベクトル束上の twisted Hermitian–Einstein 計量の存在"
authors: "Mingwei Wang, Xiaokui Yang, Shing-Tung Yau"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
arxiv_id: "2606.15102v1"
arxiv_url: "https://arxiv.org/abs/2606.15102v1"
arxiv_submitted: "2026-06-13"
arxiv_updated: "2026-06-13"
summary: >-
  任意の正則ベクトル束に対する twisted Hermitian–Einstein 方程式の一意可解性を、傾きから定まる閾値以下で証明する。不安定束にも適用でき、近似 Hermitian–Einstein 評価と不安定度を右辺にもつ内在的 Chern 数不等式を導く。
abstract_en: >-
  In this paper, we demonstrate that twisted Hermitian-Einstein metrics on holomorphic vector bundles exist without obstruction. More precisely, for an arbitrary holomorphic vector bundle $E$ over a compact Kähler manifold $(M,\omega_g)$, we prove that the twisted Hermitian-Einstein equation $$\Lambda_{\omega_g}\left(\sqrt{-1}R^h\right) = \lambda h + P$$ admits a unique smooth solution $h$, provided that $P\in\Gamma(M,E^*\otimes\bar{E}^*)$ is positive-definite and $\lambda<\lambda_E^-$. The constant $\lambda_E^-$ is intrinsically associated with the stability constant of $E$. This result extends the classical Donaldson-Uhlenbeck-Yau (DUY) theorem for stable bundles and, in the limit $P\rightarrow0$, gives a new proof of the DUY theorem. As an application, we obtain an intrinsic Chern number inequality for unstable vector bundles: $$\int_M \left((r-1)c_1(E)^2 - 2rc_2(E)\right) \wedge \omega_g^{n-2} \leq \Bigl\lfloor \frac{r^2}{4} \Bigr\rfloor \frac{(\lambda_E^+-\lambda_E^-)^2}{4\pi^2 n^2} \int_M \omega_g^n.$$
summary_en: ""
abstract_ja: >-
  コンパクト Kähler 多様体上の任意の正則ベクトル束について、正定値 Hermite tensor $P$ と傾きで定まる閾値 $\lambda_E^-$ より小さい $\lambda$ に対し、twisted Hermitian–Einstein 方程式が一意な滑らかな解をもつことを示す。これは安定束に対する Donaldson–Uhlenbeck–Yau 定理を不安定束にも twist 付きで拡張する。応用として、最大・最小安定性定数の差で不安定度を測る Chern 数不等式を得る。
abstract_source_url: "https://arxiv.org/abs/2606.15102v1"
license_name: "CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2606.15102v1](https://arxiv.org/abs/2606.15102v1)
- **著者:** Mingwei Wang, Xiaokui Yang, Shing-Tung Yau
- **初回投稿日・最終更新日:** 2026年6月13日
- **主分類:** math.DG
- **ライセンス:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

古典的 Donaldson–Uhlenbeck–Yau 定理は傾き安定な正則ベクトル束と Hermitian–Einstein 計量を結ぶ。本論文は方程式の右辺に正定値 tensor $P$ を加えることで、安定性を仮定しない任意の正則ベクトル束に一意な計量を構成する。

可解範囲は束の coherent quotient の傾きから定まる $\lambda_E^-$ によって正確に記述される。任意の $\lambda<\lambda_E^-$ で解が存在し、曲率がある定数倍の計量より真に大きくなる最大閾値も $\lambda_E^-$ と一致する。

この存在定理から、曲率の Hermitian–Yang–Mills tensor を $\lambda_E^-$ と $\lambda_E^+$ の間に近似的に挟める。さらに不安定度 $\lambda_E^+-\lambda_E^-$ を右辺とする Chern 数不等式を導き、半安定の場合には古典的不等式へ戻る。

## 背景と問題設定

coherent quotient $\mathcal Q$ に対する安定性定数を $\lambda_{\mathcal Q}$ とし、
$$
\lambda_E^-:=\inf_{\mathcal Q}\lambda_{\mathcal Q},\qquad
\lambda_E^+:=\sup_{\mathcal S}\lambda_{\mathcal S}
$$
とする。半安定性は $\lambda_E^-=\lambda_E=\lambda_E^+$ に対応する。研究対象は
$$
\Lambda_{\omega_g}\!\left(\sqrt{-1}R^h\right)=\lambda h+P
$$
という twisted Hermitian–Einstein 方程式である。

## 主結果

### 存在と閾値（Theorem 1.1）

コンパクト Kähler（より一般に Gauduchon）多様体上の任意の正則ベクトル束 $E$ について
$$
\mu_E^-:=\sup\{\lambda:\exists h,\ \Lambda_{\omega_g}(\sqrt{-1}R^h)>\lambda h\}=\lambda_E^-.
$$
さらに $\lambda<\lambda_E^-$ と正定値 $P$ に対して twisted 方程式は一意な Hermite 計量 $h$ をもつ。

### 曲率近似（Theorem 1.5）

任意の $\varepsilon>0$ に対し、ある $h_\varepsilon$ が存在して
$$
(\lambda_E^--\varepsilon)h_\varepsilon\le
\Lambda_{\omega_g}(\sqrt{-1}R^{h_\varepsilon})\le
(\lambda_E^++\varepsilon)h_\varepsilon
$$
を満たす。

### Chern 数不等式（Theorem 1.6）

$E$ の階数を $r$、$\dim_\mathbb C M=n$ とすると
$$
\int_M\bigl((r-1)c_1(E)^2-2rc_2(E)\bigr)\wedge\omega_g^{n-2}
\le \left\lfloor\frac{r^2}{4}\right\rfloor
\frac{(\lambda_E^+-\lambda_E^-)^2}{4\pi^2n^2}
\int_M\omega_g^n.
$$
不安定性の幅が消える半安定束では、右辺が0になる。

## 証明の見取り図

まず比較原理から一意性と $C^0$ 評価を得て、陰関数定理と弱コンパクト性により twisted 方程式を解く。閾値の同定では、解計量列が非有界なら Uhlenbeck–Yau 型手法で閾値に反する quotient sheaf を作り、有界なら極限計量が $\mu_E^-$ の最大性に反する、という二分法を用いる。曲率挟み撃ちと Chern–Weil 計算が Chern 数評価へつながる。

## 原論文との対応
- **Abstractページ:** [arXiv:2606.15102v1](https://arxiv.org/abs/2606.15102v1)
- **Introduction:** Section 1, pp. 1–5
- **主要定理:** Theorems 1.1–1.7
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
