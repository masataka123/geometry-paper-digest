---
layout: paper
title: On positivity of CM line bundles on the moduli space of klt good minimal models with $κ=1$
title_ja: 小平次元1のklt良い極小モデルのCM線束の正値性
authors: Masafumi Hattori
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We study the positivity of CM line bundles on the coarse moduli space of Kawamata log terminal (klt) good minimal models with Kodaira dimension one. We prove that the seminormalization of the moduli space is quasi-projective under a mild assumption on the general fibers of good minimal models. Moreover, we show that the CM line bundle becomes ample after normalization. A key new ingredient is the construction of a moduli space of numerical equivalence classes, which is an extension of the work of Viehweg and allows us to bypass the failure of quasi-finiteness in the approach of the previous work by Hashizume and the author. We also establish the projectivity of the moduli space of $\epsilon$-stable quotients, which is introduced by Toda, to a projective space, which plays a central role in our method. This particular situation is encompassed by our general framework of K-moduli of quasimaps.
topic: algebraic-geometry
tags:
- k-stability
- moduli
- positivity
- minimal-model-program
- singularities
arxiv_id: 2601.18208v1
arxiv_url: https://arxiv.org/abs/2601.18208
arxiv_submitted: '2026-01-26'
arxiv_updated: '2026-01-26'
summary: 小平次元1の偏極klt良い極小モデルのモジュライについて、一般ファイバーの条件の下で半正規化の準射影性と正規化上のCM線束の豊富性を示す。偏極の数値的同値類のモジュライを導入し、従来のquasimapへの写像が準有限でない障害を解消する。
abstract_en: ''
summary_en: This paper studies positivity on moduli of polarized good minimal models of Kodaira dimension one. The result distinguishes quasi-projectivity after seminormalization from ampleness of the CM line bundle after normalization. A new moduli space that remembers only numerical polarization classes separates two sources of variation. Projective moduli of stable quasimaps then provide positivity in the remaining directions.
abstract_ja: 小平次元1の偏極klt良い極小モデルを分類する粗モジュライ空間でCM線束を研究する。一般ファイバーが偏極Calabi–Yauモジュライの正規な部分に入るという条件の下で、半正規化が準射影的となり、十分大きい標準因子方向の捩りに対するCM線束が正規化上で豊富になる。偏極の数値的同値類を分類する新しいモジュライを用い、quasimapモジュライへの写像の準有限性の欠如を補う。射影空間への安定商を含むquasimapモジュライの射影性も示す。
abstract_source_url: https://arxiv.org/abs/2601.18208
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.18208v1](https://arxiv.org/abs/2601.18208)
- **著者:** Masafumi Hattori
- **初回投稿日:** 2026-01-26
- **最終更新日:** 2026-01-26
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

K-moduliの構成に加えて、そこに自然に付随するCM線束の豊富性を示すことは、モジュライ空間を準射影的に扱うための重要な問題である。本論文は小平次元$\kappa=1$のklt良い極小モデルを対象とする。

既存の方法では、モジュライからquasimapのモジュライへの写像が準有限でないことが障害になっていた。元のモジュライは偏極の線形同値類を区別するが、quasimap側は数値的同値しか見ないためである。著者は数値的同値類のモジュライ$N$を中間に挿入する。

この構成から、一般ファイバーに関する条件の下で半正規化の準射影性と、正規化へ引き戻したCM線束の豊富性が得られる。元の非正規モジュライ空間そのものの準射影性やCM線束の豊富性までは、この方法で従わない点が明示されている。

## 背景と問題設定

標数0の代数閉体上で、曲線を底とする偏極klt良い極小モデル$f:(X,A)\to C$を考える。$K\_X\sim\_{\mathbb Q}f^\ast L$で$\deg\_C L=u>0$なら$\kappa=1$に対応する。次元、一般ファイバー上の偏極体積、全体の体積などを固定する。

調べる$\Lambda\_{\mathrm{CM},t}$は偏極$A+tK\_X$に対するCM有理線束である。半正規化$M^{\mathrm{sn}}$と正規化$M^\nu$は異なる操作であり、定理の結論もこの二つを使い分ける。

## 主結果

### CM線束の豊富性と準射影性（Theorems 1.2、1.4）

一般ファイバーが偏極klt Calabi–Yau多様体のモジュライの正規部分に入るような部分空間$M$を取る。このとき

$$
M^{\mathrm{sn}}\text{ は準射影的},\qquad \nu^\ast \Lambda\_{\mathrm{CM},t}\text{ は }t\gg0\text{ で豊富}
$$

となる。$\nu:M^\nu\to M$は正規化である。精密なTheorem 1.4では十分可除な$k$を選び、一般ファイバー$F$の$(F,kA|\_F)$が、次元と体積を固定したCalabi–Yauモジュライの正規部分$V\_1$に属することを要求する。

従来の一般ファイバーがアーベル多様体または原始的シンプレクティック多様体という仮定は除かれるが、$V\_1$の条件は残る。正規化後の豊富性を元の空間へ無条件で降下させた主張ではない。

### 安定quasimapの射影モジュライ（Theorem 1.5）

正規な射影多様体$X\hookrightarrow\mathbb P^N$へのquasimapを、節点曲線から$[\operatorname{Cone}(X)/\mathbb G\_m]$への射として扱う。重み$w\in\mathbb Q\cap[0,1]$、線束次数$m>0$、$\deg K\_C+wm=v>0$を固定し、$K\_C+wL$が豊富である安定性条件の下で、固有な有限型Deligne–Mumfordスタックと射影的な粗モジュライ空間を得る。その空間は豊富なCM有理線束を持つ。

射影空間を標的に取る場合にはTodaの安定商が含まれる。Introductionは、この場合の粗モジュライの射影性も新しい点として強調する。

### 数値的同値類のモジュライ（Theorem 1.7）

有理Cartier Weil偏極とklt特異点を許して、偏極を数値的にしか区別しないモジュライ$N$を構成する。点の同値関係は

$$
(X,A)\equiv(Y,B)\quad\Longleftrightarrow\quad\exists\phi:X\simeq Y,\ \phi^\ast B-A\equiv\_{\mathrm{num}}0
$$

である。対応するスタックの射は固有・滑らか・全射となり、粗空間の射$\xi:M\to N$に対して$\Lambda\_{\mathrm{CM},t}$は$t\gg0$で相対豊富になる。従ってCM線束は一般には$N$上の線束の単なる引き戻しではない。

### Quasimapとの比較（Theorems 1.6、1.8）

Introductionの主要な図式は

$$
M^{\mathrm{sn}}\xrightarrow{\xi}N^{\mathrm{sn}}\xrightarrow{\alpha}M\_{\mathrm{qmaps}},\qquad\beta=\alpha\circ\xi
$$

である。必要な有理偏極への移行と局所閉部分空間の選択の後、$\xi$の射影性と$\alpha$の準有限性を確保する。正規化上で$\Lambda\_{\mathrm{CM},t}$の$t\to\infty$の極限をquasimap側の豊富なCM線束の引き戻しに比較し、$\xi$方向の相対豊富性と合わせる。Theorem 1.8の準有限性が、元の$\beta$で失敗していた段階を置き換える。

## 証明の見取り図

Picardスキームを有理Cartier因子へ拡張する構成から数値的同値の商を作り、CM線束の相対豊富性を示す。別途quasimapモジュライの射影性と、一般ファイバーのCalabi–Yauモジュライの正規化に対するコンパクト化を準備する。最後に比較図式を通じて底方向と繊維方向の正値性を組み合わせる。非固有空間にNakai–Moishezon判定を直接適用する方法ではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2601.18208)
- **Introduction:** [PDF](https://arxiv.org/pdf/2601.18208v1) — Section 1, pp. 2–8（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.2、1.4–1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2601.18208v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
