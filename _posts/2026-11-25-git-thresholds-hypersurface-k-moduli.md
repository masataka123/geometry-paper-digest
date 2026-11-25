---
layout: paper
title: GIT-thresholds for K-moduli spaces of Hypersurfaces
title_ja: 超曲面のKモジュライがGITと一致する最初の壁
authors: Chuhui Gao, Chuyu Zhou
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this note, we confirm the first wall $c_1(d)$ of K-moduli of hypersurfaces of degree $d$ in $\mathbb P^n$ for $n\geq 3$ and $d\geq n+1$, where $c_1(d)=\frac{n+1}{nd}$ if $d$ is even; and $c_1(d)=\frac{n+1}{nd-(n+1)}$ if $d$ is odd. Before this wall, the K-moduli is identical to the GIT-moduli for degree $d$ hypersurfaces, so we also call this number the GIT-threshold.
topic: algebraic-geometry
tags:
- k-stability
- moduli
- fano-varieties
arxiv_id: 2611.30089v1
arxiv_url: https://arxiv.org/abs/2611.30089
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: 射影空間の超曲面に係数を付けた対について、GIT安定性とK安定性が一致する最初の区間を決定する。その右端は超曲面の次数の偶奇で異なる。
abstract_en: In this note, we confirm the first wall $c_1(d)$ of K-moduli of hypersurfaces of degree $d$ in $\mathbb P^n$ for $n\geq 3$ and $d\geq n+1$, where $c_1(d)=\frac{n+1}{nd}$ if $d$ is even; and $c_1(d)=\frac{n+1}{nd-(n+1)}$ if $d$ is odd. Before this wall, the K-moduli is identical to the GIT-moduli for degree $d$ hypersurfaces, so we also call this number the GIT-threshold.
summary_en: ''
abstract_ja: 次数と射影空間の次元を固定し、境界係数を零から大きくしていく。最初の壁より手前では、K半安定な退化によって周囲の射影空間が別の多様体に変わらず、超曲面のGITによる分類が保たれる。
abstract_source_url: https://arxiv.org/abs/2611.30089
license_name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
license_url: http://creativecommons.org/licenses/by-nc-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.30089v1](https://arxiv.org/abs/2611.30089)
- **著者:** Chuhui Gao, Chuyu Zhou
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

同じ超曲面を分類するにも、その定義式に座標変換を作用させてGIT商を取る方法と、超曲面を境界として含む対のKモジュライを取る方法がある。後者では境界の係数も指定する。

係数が十分小さいと二つの分類が一致することは既知であった。著者らはこの「十分小さい」を、次元と次数から直接計算できる形にする。

証明で問うのは、一般ファイバーが射影空間である族の特殊ファイバーも射影空間のままかという点である。

## 背景と問題設定

複素数上で $S\subset\mathbb P^n$ を次数 $d$ の超曲面とし、非負の有理数 $c$ で境界を重み付けする。対 $(\mathbb P^n,cS)$ のK半安定な極限では、境界と同時に周囲の空間も退化し得る。

## 主結果

### 次数の偶奇と最初の壁（Theorem 1.1）

$n\ge3,\ d\ge n+1$ とすると最初の壁の位置は次数の偶奇で決まる。偶数次数では
$$
c\_1(d)=\frac{n+1}{nd},
$$
奇数次数では
$$
c\_1(d)=\frac{n+1}{nd-(n+1)}
$$
である。任意の $0<c<c\_1(d)$ において、$S$ のGIT半安定性、多重安定性、安定性は、それぞれ対のK半安定性、K多重安定性、K安定性と同値である。この同値の係数範囲は開区間である。

## 証明の見取り図

超平面類の極限 $L$ が定める有理写像の像で場合分けする。像が全次元なら既知の射影空間の特徴づけを使える。像が余次元一で次数が奇数なら、$L$ のCartier指数と線形系の基底集合 の特異点を調べる。残りの場合は、対数Fano対のオービフォールド接層の標準拡大が傾き半安定であることを用いて排除する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.30089)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.30089v1) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.30089v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source\_scope:** Abstract and Introduction
