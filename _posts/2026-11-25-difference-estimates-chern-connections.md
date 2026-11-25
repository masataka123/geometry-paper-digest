---
layout: paper
title: Difference estimates for Chern connections on homolomorphic vector bundles
title_ja: 正則ベクトル束上のChern接続の差の局所評価
authors: Chenghong He, Di Wu, Xi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: This paper investigates the uniqueness issue of Chern connections from the Cheng-Yau type estimate point of view. We establish local difference estimates for Chern connections on holomorphic vector bundles over complete noncompact Kähler manifolds with Ricci curvature bounded from below. These local estimates not only enable us to obtain uniqueness results for Hermitian-Einstein connections on complete noncompact Kähler manifolds with nonnegative Ricci curvature, but also apply to study the Liouville theorem for complex Monge-Ampère equation on $\mathbb{C}^n$ as well as the Chern flatness and Kählerness for Hermitian metrics on complete noncompact Ricci flat Kähler manifolds.
topic: differential-geometry
tags:
- vector-bundles-sheaves
- hermite-einstein-metrics
- curvature
arxiv_id: 2611.30103v1
arxiv_url: https://arxiv.org/abs/2611.30103
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: 完備Kähler多様体上で行列式が等しい二つのHermite計量を取り、そのChern接続の差を測地球上で評価する。非負Ricci曲率と固有値比の成長条件のもとで、二つのHermite–Einstein接続の一致が曲率との可換性で特徴づけられる。
abstract_en: This paper investigates the uniqueness issue of Chern connections from the Cheng-Yau type estimate point of view. We establish local difference estimates for Chern connections on holomorphic vector bundles over complete noncompact Kähler manifolds with Ricci curvature bounded from below. These local estimates not only enable us to obtain uniqueness results for Hermitian-Einstein connections on complete noncompact Kähler manifolds with nonnegative Ricci curvature, but also apply to study the Liouville theorem for complex Monge-Ampère equation on $\mathbb{C}^n$ as well as the Chern flatness and Kählerness for Hermitian metrics on complete noncompact Ricci flat Kähler manifolds.
summary_en: ''
abstract_ja: 束の計量の相対的な伸縮と曲率項を用いて接続の差を制御する。接束に適用すると、Euclid計量との比較が適切な速度で劣化することを許しながら、Ricci平坦Kähler計量の剛性を得る。
abstract_source_url: https://arxiv.org/abs/2611.30103
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.30103v1](https://arxiv.org/abs/2611.30103)
- **著者:** Chenghong He, Di Wu, Xi Zhang
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.DG（主分類）; math.AP, math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

非コンパクトな底では、二つのHermite–Einstein計量が同じ行列式をもち互いに有界でも、Chern接続が一致するとは限らない。著者らは複素二次元アフィン空間上の反例も挙げている。

そこで、測地球の半径をパラメータとして、接続の差がどれだけ小さいかを評価する。基準側の曲率を明示的に残すことで、射影平坦な場合と一般のHermite–Einsteinの場合を区別できる。

この評価を接束に用いると、複素Monge–Ampère方程式に関するLiouville型定理やChern平坦計量との比較に帰着する。

## 背景と問題設定

$H,K$ を正則束のHermite計量、$h=K^{-1}H$ とし、球 $B\_R$ での最大・最小固有値の上限・下限を $M\_R,m\_R$ とする。$A\_R=\sup\_{B\_R}\mathrm{tr}(h^{-1})$ である。Cheng–Yauの勾配評価が動機だが、二つの接続の差自体は一般には調和でなく、曲率に由来する項が残る。

## 主結果

### 半径に依存する局所評価（Theorem 1.2）

完備Kähler多様体の球で $\mathrm{Ric}\ge-\kappa g$ とし、$\det H=\det K$、$H$ はHermite–Einsteinとする。$B=A\_RM\_R$、$U=\sup\_{B\_R}|F\_K^\perp|+\sup\_{B\_R}|\Lambda F\_K^\perp|\_K$、$V=\sup\_{B\_R}|D\_K(\Lambda F\_K^\perp)|$ と書くと、無跡曲率を用いた評価は
$$
\sup\_{B\_{R/2}}|D\_H-D\_K|\le C B^{1/2}\frac{1+\sqrt{\kappa}R}{R}+C B^{1/2}U^{1/2}+C B^{1/3}V^{1/3}
$$
となる。特にRicci曲率が非負で $K$ が射影平坦なら右辺は $C\sqrt{\mathrm{rank}(E)M\_R/m\_R}/R$ で抑えられる。

### 曲率との可換性（Theorem 1.3、Corollary 1.2）

局所評価の曲率項を $h^{-1}[F\_K,h]$ とその微分などで表すと、完備非コンパクトでRicci曲率が非負、両計量がHermite–Einsteinかつ行列式が等しい場合に、大域的な同値
$$
M\_R/m\_R=o(R^2)\quad\Longrightarrow\quad
\bigl(D\_H=D\_K\ \Longleftrightarrow\ [F\_K,h]=0\bigr)
$$
を得る。射影平坦な $K$ では曲率がスカラーなので可換性が自動的に成り立つ。

### 複素アフィン空間上の剛性（Theorem 1.4）

$\mathbb C^n$ 上のRicci平坦Kähler形式が標準計量の半径 $R$ の球で $c\_R\omega\_0\le\omega\le C\_R\omega\_0$ を満たし、$C\_R/c\_R^2=o(R^2)$ なら、$\nabla^{g\_0}\omega=0$ である。したがって標準座標で係数行列が定数となる。

### 一般のRicci平坦な底（Theorem 1.5）

完備非コンパクトなRicci平坦Kähler計量 $g$ とChern平坦Hermite計量 $\tilde g$ が $g$ の測地球で $c\_Rg\le\tilde g\le C\_Rg$、$C\_R/c\_R=o(R^2)$ を満たすなら接続が一致する。特に $g$ は平坦で、$\tilde g$ はKählerである。

## 証明の見取り図

局所評価を半径の半分の球で与えておくと、曲率項が消える状況では任意の固定点を含むまま半径を無限大にできる。固有値比の成長条件は、この極限で接続の差を零にするために現れる。接束では接続の一致がそのまま計量の平行性に読み替えられる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.30103)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.30103v1) — §1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.2–1.5、Corollaries 1.1–1.4。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.30103v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
