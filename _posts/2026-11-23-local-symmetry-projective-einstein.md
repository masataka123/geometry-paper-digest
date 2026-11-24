---
layout: paper
title: A local symmetry forces positivity for projectively induced Kahler-Einstein metrics
title_ja: 射影誘導Kähler–Einstein計量のEinstein定数を決める局所対称性
authors: Filippo Salis
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that a projectively induced Kahler-Einstein metric has positive Einstein constant as soon as it admits one nonzero local real-holomorphic Killing field. Neither completeness nor a prescribed global group action is assumed. This gives a partial answer, under a local symmetry hypothesis, to the general positivity problem for Kahler-Einstein submanifolds of (finite-dimensional) projective space. The key observation is that, by Calabi rigidity, a local real-holomorphic Killing field is induced by a projective unitary vector field whose tangency propagates along any connected global Kahler immersion, without a simple-connectivity assumption. Applied to Hulin's complete continuation, this produces a global Killing field with a bounded Hamiltonian potential given by the ambient projective moment map. The resulting Laplace equation, the Omori--Yau maximum principle and Yau's Liouville theorem exclude both negative and zero Einstein curvature. We also prove a non-Einstein
  obstruction under uniformly negative Ricci curvature and obtain compact equivariant continuations.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- curvature
arxiv_id: 2611.27345v1
arxiv_url: https://arxiv.org/abs/2611.27345
arxiv_submitted: '2026-11-20'
arxiv_updated: '2026-11-20'
summary: 有限次元射影空間へ局所Kählerはめ込みを持つ連結Kähler–Einstein多様体では、非零の局所実正則Killing場が一つあればEinstein定数は正となる。元の計量の完備性や大域群作用は仮定しない。
abstract_en: ''
summary_en: An infinitesimal symmetry of the immersed germ extends to a bounded vector field on a complete continuation. The ambient projective moment map provides a bounded potential. Its eigenfunction equation rules out nonpositive Einstein constants under this local symmetry assumption.
abstract_ja: 局所等長変換の無限小生成元を射影ユニタリ変換の生成元として表し、完備な延長上で有界なHamiltonポテンシャルを得る。そのポテンシャルのLaplacianを調べることで、Einstein定数が負または零となる可能性を排除する。
abstract_source_url: https://arxiv.org/abs/2611.27345
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.27345v1](https://arxiv.org/abs/2611.27345)
- **著者:** Filippo Salis
- **初回投稿日:** 2026-11-20
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素射影空間からFubini–Study計量を引き戻して得る局所Kähler計量がEinsteinであるとする。この外在的な仮定がEinstein定数の符号をどこまで決めるかが問題である。

著者は非零の局所実正則Killing場が一つ存在する場合に正値性を示す。もとの多様体にコンパクト群が作用する必要はなく、その局所ベクトル場の流れが完備である必要もない。

局所対称性から得るのは、完備な延長の上で一様に有界なベクトル場とそのHamiltonポテンシャルである。符号を決定するにはこの大域的有界性が効く。

## 背景と問題設定

有限次元の射影空間に入るKähler–Einstein多様体の正値性問題のうち、ここで解かれるのは局所対称性を持つ場合である。元のはめ込みとKilling場の定義域が最初から同じであることも要求しない。

## 主結果

### Einstein定数の正値性（Theorem 1.1）

連結なKähler–Einstein多様体が局所的に有限次元の $\mathbb{CP}^N$ にKählerはめ込みを持ち、空でない開集合上に非零の実正則Killing場を持てば、
$$
\mathrm{Ric}(g)=\lambda g\quad\Longrightarrow\quad\lambda>0.
$$

### 局所対称性の延長（Theorem 1.2）

像が真の射影部分空間に含まれないはめ込みを持つ連結なEinstein芽には、同じEinstein定数を持つ完備な延長が存在する。局所Killing場の芽はそこで一意に大域化し、完備でノルムが有界な射影ユニタリ由来の場になる。

### 負のRicci曲率による障害（Theorem 1.3）

完備連結で有限次元射影空間へKählerはめ込みを持つ場合、$-Cg\le\mathrm{Ric}(g)\le-cg$、$C\ge c>0$ なら、非零の局所実正則Killing場は存在しない。

## 証明の見取り図

Calabiの剛性から局所対称性を射影ユニタリ変換で表す。延長上の有界なHamiltonポテンシャルは $\Delta u+2\lambda u=\mathrm{const}$ を満たす。Omori–Yau最大値原理を適用し、零の場合にはYauのLiouville定理も用いて、非自明な場が残る可能性を除く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.27345)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.27345v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.27345v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
