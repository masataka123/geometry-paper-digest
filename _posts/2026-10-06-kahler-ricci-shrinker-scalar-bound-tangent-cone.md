---
layout: paper
title: Scalar curvature bounds and tangent cones for K\"ahler--Ricci shrinkers
title_ja: Kähler–Ricci縮小ソリトンのスカラー曲率上界と無限遠接錐
authors: Yu Li, Junsheng Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We prove a uniform scalar curvature bound, depending only on the dimension, for K\"ahler--Ricci shrinkers. We also prove that every noncompact K\"ahler--Ricci shrinker has a unique tangent cone at infinity, naturally homeomorphic to the base of its polarized Fano fibration.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
- noncompact-kahler-geometry
- metric-limits
- fano-varieties
arxiv_id: 2610.05643v1
arxiv_url: https://arxiv.org/abs/2610.05643
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  完備Kähler–Ricci縮小ソリトンのスカラー曲率に、複素次元だけで決まる一様上界を与える。さらに非コンパクトな場合には、無限遠の接錐が一意な距離錐となり、偏極Fanoファイブレーションの底と自然に同相であることを示す。解析的な曲率評価と無限遠の代数幾何的構造を結ぶ結果である。
abstract_en: ''
summary_en: |-
  The geometry of a shrinking Kähler soliton is studied at both local curvature and large-distance scales. A dimensional estimate removes a previously required scalar-curvature hypothesis from the analysis at infinity. The limiting space is then identified through the soliton's algebraic fibration and shown to carry a metric-cone structure. Neither nonnegative Ricci curvature nor Euclidean volume growth is imposed for this conclusion.
abstract_ja: |-
  Kähler–Ricci縮小ソリトンについて、次元だけに依存する一様なスカラー曲率上界を証明する。また、任意の非コンパクトKähler–Ricci縮小ソリトンが無限遠で一意な接錐を持ち、それが付随する偏極Fanoファイブレーションの底と自然に同相であることを示す。
abstract_source_url: https://arxiv.org/abs/2610.05643
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05643v1](https://arxiv.org/abs/2610.05643)
- **著者:** Yu Li, Junsheng Zhang
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

縮小RicciソリトンはRicci流の自己相似解であり、特異点のモデルとして現れる。非コンパクトな場合には、遠方の曲率をどこまで制御できるか、遠くから見た空間の形が一意に決まるかが基本的な問題となる。

本論文の第一の結果は、Kähler–Ricci縮小ソリトンのスカラー曲率が、複素次元だけに依存する定数で一様に抑えられるというものである。従来の距離に関する増大評価を、空間全体での定数上界へ置き換える。

第二の結果は無限遠の構造を決定する。非コンパクトなソリトンを縮小して眺めると、一意な距離錐へ収束し、その空間はソリトンに付随する偏極Fanoファイブレーションの底と一致する。曲率評価だけでなく、ファイバーの収縮と極限の距離構造の同定までを結び付ける点が特徴である。

## 背景と問題設定

複素次元 $n$ のKähler–Ricci縮小ソリトンは完備な縮小勾配ソリトンであり、本論文は

<div>
$$
\operatorname{Ric}(\omega)+\sqrt{-1}\partial\bar\partial f=\omega
$$
</div>

という正規化を使う。スカラー曲率は複素幾何の規約 $R_\omega=R_g/2$ に従う。ソリトン恒等式からは従来 $0\leq R_\omega\leq f+n$ が分かるが、ポテンシャル $f$ は距離の二乗程度に増大するため、これだけでは一様上界にならない。

無限遠の極限については、先行研究でスカラー曲率の有界性と標準的な時刻0切片の局所コンパクト性を仮定した存在・一意性が得られていた。本論文はKählerの場合にこの二つを満たすことを示し、さらに距離錐であることまで証明する。

## 主結果

### 主定理1：次元だけに依存するスカラー曲率上界（Theorem 1.1）

各複素次元 $n$ に対して定数 $C_n<\infty$ が存在し、その次元の全てのKähler–Ricci縮小ソリトンで

<div>
$$
0\leq R_\omega\leq C_n
$$
</div>

が成り立つ。コンパクト性は仮定されず、定数は個別のソリトンではなく次元だけに依存する。

これをソリトンが誘導する標準古代解 $\omega_t=(-t)\psi_t^*\omega$ に適用すると、

<div>
$$
0\leq R_{\omega_t}\leq\frac{C_n}{|t|},\qquad t\lt 0
$$
</div>

というType I型のスカラー曲率評価になる。これは全曲率テンソルの同じ上界を主張するものではない。

### 主定理2：無限遠接錐の一意性とFanoファイブレーション（Theorem 1.2）

$X$ を非コンパクトKähler–Ricci縮小ソリトンとし、$\pi:X\to Y$ を付随する偏極Fanoファイブレーション、$0\in Y$ をその頂点とする。$Y$ の解析的位相を誘導するproperな測地距離 $d_Y$ が存在し、任意の基点 $p\in X$ について

<div>
$$
(X,r^{-2}g,p)
\longrightarrow(Y,d_Y,0)\cong C(\Sigma)
\qquad(r\to\infty)
$$
</div>

が基点付きGromov–Hausdorffの意味で成立する。ここで $\Sigma$ はコンパクトな測地距離空間であり、右辺はその距離錐である。

部分列の選択によらない極限なので、無限遠接錐は一意である。底空間との対応は位相だけの比喩ではなく、$Y$ に解析的位相と整合する距離を入れた同定である。Ricci曲率の非負性やEuclid的体積増大を仮定しない点で、古典的な非負Ricci曲率の接錐理論とは適用範囲が異なる。

## 証明の見取り図

曲率評価には、標準古代解上のポテンシャルから作る一形式と、重み付き $L^2$ で勾配からどれだけ離れているかを測るエネルギーを使う。Kähler構造によりポテンシャルのHessianとこの一形式の微分を結び付け、スカラー曲率の評価へ還元する。熱核評価、Ricci流のコンパクト性、Bochner型消滅論を組み合わせ、尺度間のエネルギー改善を反復する。

次にKählerポテンシャルと距離の局所Hölder制御から時刻0切片のpropernessを得る。Fanoファイバー内の有理曲線に沿う距離関数のエネルギーが消え、有理鎖連結性によってファイバー全体が一点へ潰れることから底 $Y$ を同定する。

最後に重み付きRicci恒等式とエントロピーの勾配流を用いて、極限の距離が錐の距離公式を満たすことを示す。以上はIntroductionに記された論理の流れであり、後続節の解析的証明の独立検証ではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.05643](https://arxiv.org/abs/2610.05643)
- **Introduction:** Section 1、pp. 1–4。規約と構成説明を含む。
- **主要定理・式:** Theorems 1.1–1.2、式(1.1)、(1.2)、(1.5)。
- **論文構成:** p. 4。曲率評価、時刻0切片とFanoファイブレーション、距離錐構造の順に証明する。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
