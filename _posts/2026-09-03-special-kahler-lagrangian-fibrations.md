---
layout: paper
title: "Special Kähler geometry and holomorphic Lagrangian fibrations"
title_ja: "特殊 Kähler 幾何と正則 Lagrangian ファイブレーション"
authors: "Yang Li, Valentino Tosatti"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  Given a holomorphic Lagrangian fibration of a compact hyperkahler manifold, we use the differential geometry of the special Kahler metric that exists on the base away from the discriminant locus, and show that the pullback of the tangent bundle of the base to the total space of a family of minimal rational curves admits a parallel splitting. The splitting is nontrivial when the base is not half-dimensional projective space. Combining this with results of Voisin, Hwang and Bakker-Schnell, we deduce that the base must be projective space, a result first proved by Hwang.
topic: algebraic-geometry
tags:
  - hyperkahler-geometry
  - moduli
  - curvature
arxiv_id: "2308.10553v4"
arxiv_url: "https://arxiv.org/abs/2308.10553"
arxiv_submitted: "2023-08-21"
arxiv_updated: "2024-03-02"
summary: >-
  コンパクト hyperkähler 多様体の正則 Lagrangian ファイブレーションについて、判別集合外の基底に入る特殊 Kähler 計量を用い、極小有理曲線族上で基底の接束が非自明な平行分解を持つことを示す。この分解と Voisin、Hwang、Bakker–Schnell の結果を組み合わせ、基底が滑らかな場合に射影空間となる Hwang の定理へ新しい経路を与える。
abstract_en: ""
summary_en: >-
  The paper studies holomorphic Lagrangian fibrations from compact hyperkähler manifolds through the special Kähler metric on the smooth part of the base. For a family of minimal rational curves, a distinguished subbundle of the pulled-back tangent bundle is proved to be parallel. If the base were not projective space, this would yield a nontrivial splitting. Together with external rigidity and connectedness results, the splitting gives another route to Hwang's theorem for a smooth base.
abstract_ja: >-
  コンパクト hyperkähler 多様体の正則 Lagrangian ファイブレーションに対し、判別集合の外で基底に存在する特殊 Kähler 計量の微分幾何を用いる。極小有理曲線族の全空間へ引き戻した基底の接束が平行分解を持ち、基底が半次元射影空間でなければその分解は非自明であることを示す。既知の結果と合わせることで、基底が射影空間であるという Hwang の定理を導く。
abstract_source_url: "https://arxiv.org/abs/2308.10553"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **著者**: Yang Li, Valentino Tosatti
- **arXiv**: [arXiv:2308.10553v4](https://arxiv.org/abs/2308.10553)
- **初回投稿日**: 2023年8月21日
- **更新日**: 2024年3月2日
- **主要カテゴリ**: math.AG
- **ライセンス**: [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$2n$ 次元 hyperkähler 多様体 $X$ からの正則 Lagrangian ファイブレーション $f:X\to B$ では、基底は $n$ 次元で、滑らかなファイバーは複素トーラスとなる。基本予想は $B\cong\mathbb P^n$ であり、$X$ が射影的で $B$ が滑らかな場合は Hwang により証明済みである。

本稿はこの既知の定理に、特殊 Kähler 幾何を使う新しい経路を与える。$B$ が $\mathbb P^n$ でないと仮定すると、反標準次数の小さい極小有理曲線の族から、引き戻し $\mu^*T B^\circ$ の正次数部分が非自明な部分束 $V$ を定める。

主定理は $V$ が特殊 Kähler 計量の Chern 接続で平行であると主張する。対応する実部分束は平坦な特殊 Kähler 接続でも保たれ、Hodge 構造の変動の非自明な分解として読める。

この分解を曲線族のファイバー連結性によって基底へ降ろすと、特殊 Kähler 形式に比例しない平行実 $(1,1)$ 形式が生じる。しかし Voisin の結果がこれを禁じるため、$B\not\cong\mathbb P^n$ という仮定が排除される。

## 背景と問題設定

Matsushita の結果により、非自明な全射 $f:X^{2n}\to B$ のファイバーの既約成分は正則シンプレクティック形式に関して Lagrangian である。一般の特異な基底では予想は未解決だが、基底が滑らかな場合の分類を、Mori 理論と特殊 Kähler 計量の曲率剛性の接点から捉え直すことが本稿の狙いである。

判別集合 $D$ の外 $B^\circ=B\setminus D$ には、非負双断面曲率を持つ特殊 Kähler 計量 $g_{\mathrm{SK}}$ と、平坦・捩れなしで $d^{\nabla^{\mathrm{SK}}}J=0$ を満たす特殊 Kähler 接続がある。ただし計量は非コンパクトな $B^\circ$ 上で不完備であり、Mok のコンパクトな分類をそのまま適用できない。

## 主結果

### 主定理（Theorem 1.3）

**結論**として、極小有理曲線の普遍族の評価写像 $\mu:U\to B$ に対し、Grothendieck 分解の正次数因子が定める部分束

$$
V\subset \mu^*T B^\circ
$$

は、$g_{\mathrm{SK}}$ の Chern 接続の引き戻しで保たれる。$B\not\cong\mathbb P^n$ の場合には $0<\operatorname{rk}V<n$ であり、分解は非自明である。さらに対応する実部分束 $V_{\mathbb R}\subset\mu^*T_{\mathbb R}B^\circ$ も $\nabla^{\mathrm{SK}}$ で平行となる。

数学的には、有理曲線に由来する代数幾何的な接束分解が、基底の特殊 Kähler 幾何に対しても平行になるという剛性である。これが Hodge 構造の変動の分解と、射影空間による基底の特徴づけを結ぶ。

### Hwang の定理（Theorem 1.2）への帰結

$X$ が射影的で $B$ が滑らかな場合、Theorem 1.3 と Voisin、Hwang、Bakker–Schnell の結果を組み合わせて $B\cong\mathbb P^n$ を得る。これは Theorem 1.3 単独の直接帰結ではなく、曲線族の評価写像のファイバー連結性など外部の結果を用いる。

## 証明の見取り図

ファイブレーションが最大変動を持つ場合、まず $V$ とその直交補空間のベクトルに対して特殊 Kähler 計量の双断面曲率が消えることを示す。判別集合近傍での計量の漸近評価と正の下界を使い、さらに該当曲率の粗 Laplacian の消滅を証明して Mok 型の議論へ接続する。等質的な場合は特殊 Kähler 計量の平坦性を直接利用する。

得られた実平行分解を基底へ降ろし、$\omega_{\mathrm{SK}}$ と比例しない平行 $(1,1)$ 形式を構成する。Voisin の剛性結果との矛盾が基底を $\mathbb P^n$ に限定する。

## 原論文との対応

本記事は Abstract と Introduction に現れる Theorems 1.2, 1.3 と証明戦略を扱った。v4 の Introduction は、初稿の Section 7 の議論が不完全であり、改訂版では Bakker–Schnell の結果に依存して Theorem 1.2 を導くことも明記している。
