---
layout: paper
title: Aspects of deformation invariance of plurigenera of Kähler varieties
title_ja: Kähler族の多重種数の変形不変性と高次順像の捩れ
authors: Jiawei Feng, Yi Li, Sheng Rao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study several aspects of deformation invariance of plurigenera in K\"ahler families over a smooth curve. First, for a relatively flat coherent sheaf, we characterize local constancy of fiberwise cohomology dimension by equivalent conditions in terms of extension, base change, torsion freeness of higher direct images, and the vanishing of jumping classes. Then, combining this criterion with the K\"ahler minimal model program, we prove invariance of plurigenera for K\"ahler families of threefolds whose central fiber has canonical singularities, and for smooth K\"ahler families of maximal Albanese dimension. We also establish deformation invariance of log plurigenera when the central fiber is projective, and is of log general type. We prove the invariance of higher cohomological plurigenera assuming that the canonical bundle of the total space is semipositive. Finally, we extend Z.~Li--Z.~Wang's deformation invariance result for generalized polarized pairs with abundant nef
  parts from projective families to Moishezon families.
topic: algebraic-geometry
tags:
- moduli
- minimal-model-program
- vector-bundles-sheaves
- multiplier-ideals-extension
- positivity
arxiv_id: 2610.17817v1
arxiv_url: https://arxiv.org/abs/2610.17817
arxiv_submitted: '2026-10-13'
arxiv_updated: '2026-10-13'
summary: 滑らかな曲線上の族で、ファイバーのコホモロジー次元が一定となる条件を高次順像の捩れの消滅などで特徴づける。これをKähler極小モデル理論と組み合わせ、canonical特異点をもつ三次元の族や最大Albanese次元の族について多重種数の不変性を示す。対数的・高次コホモロジー的・一般化多重種数への拡張にも、それぞれ固有の仮定を置く。
abstract_en: We study several aspects of deformation invariance of plurigenera in K\"ahler families over a smooth curve. First, for a relatively flat coherent sheaf, we characterize local constancy of fiberwise cohomology dimension by equivalent conditions in terms of extension, base change, torsion freeness of higher direct images, and the vanishing of jumping classes. Then, combining this criterion with the K\"ahler minimal model program, we prove invariance of plurigenera for K\"ahler families of threefolds whose central fiber has canonical singularities, and for smooth K\"ahler families of maximal Albanese dimension. We also establish deformation invariance of log plurigenera when the central fiber is projective, and is of log general type. We prove the invariance of higher cohomological plurigenera assuming that the canonical bundle of the total space is semipositive. Finally, we extend Z.~Li--Z.~Wang's deformation invariance result for generalized polarized pairs with abundant nef
  parts from projective families to Moishezon families.
summary_en: ''
abstract_ja: 曲線上のKähler族の多重種数が変形で変化しない条件を調べる。相対的に平坦な連接層について、コホモロジー次元の局所一定性、切断の拡張、底変換、高次順像の捩れの消滅を結びつける。この判定と極小モデル理論から、canonicalな中心ファイバーをもつ三次元の族および最大Albanese次元の滑らかな族で不変性を得る。さらに対数的な場合、高次コホモロジーの場合、abundantなnef部分をもつ一般化対のMoishezon族を、それぞれ追加仮定の下で扱う。
abstract_source_url: https://arxiv.org/abs/2610.17817
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.17817v1](https://arxiv.org/abs/2610.17817)
- **著者:** Jiawei Feng, Yi Li, Sheng Rao
- **初回投稿日:** 2026-10-13
- **最終更新日:** 2026-10-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

多重種数は、多重標準束の切断の数を測る双有理不変量である。射影的な滑らかな族では不変性が知られるが、任意のコンパクトKähler多様体の滑らかな族については、IntroductionのConjecture 1.1として未解決のまま提示される。本論文はその一般予想全体を解くものではない。

出発点は、滑らかなStein曲線上でコホモロジー次元が局所一定になることを、高次順像の捩れ、底変換、拡張の可否という異なる言葉で判定する定理である。この枠組みは、幾何学的な正値性や極小モデルの存在を不変性へ変換する役割をもつ。

応用では、canonicalな中心ファイバーをもつKähler三次元の族と、中心ファイバーが最大Albanese次元をもつ滑らかなKähler族を扱う。さらに対数的な多重種数、標準束の半正値性を仮定した高次コホモロジー、多様体の射影性をMoishezon性へ緩めた一般化対の結果を得る。これらの仮定は互いに異なり、一律にすべてのKähler族へ適用できるわけではない。

## 背景と問題設定

ファイバー$X_t$の多重種数と高次コホモロジー的多重種数を

$$
P_m(X_t)=h^0(X_t,mK_{X_t}),\qquad P_m^{(q)}(X_t)=h^q(X_t,\mathcal O_{X_t}(mK_{X_t}))
$$

と書く。対数的な場合は$m(K_{X_t}+B_t)$、一般化対では$m(K_{X_t}+B_t+M_{X_t})$の切断を数える。必要な整数性・Cartier条件を満たす$m$だけが対象となる。Siuの射影的な結果以後、拡張定理と相対極小モデル理論は主要な方法であり、本論文はこれらを解析的な底変換・捩れの判定と結びつける。

## 主結果

### コホモロジー次元の判定（Theorem 1.2）

$f:X\to Y$を滑らかなStein曲線へのproper flatな複素空間の射、$\mathcal F$を$f$に関して平坦な連接解析層とする。$q\ge0$に対し

$$
y\longmapsto h^q(X_y,\mathcal F(y))\text{が局所一定}
\quad\Longleftrightarrow\quad
R^qf_{\ast}\mathcal F,\ R^{q+1}f_{\ast}\mathcal F\text{がtorsion-free}
$$

である。さらにこれは$q$次元でのcohomological flatness、$q,q-1$次の底変換写像がすべての点で同型であること、同じ次数の大域コホモロジーからファイバーへの制限の全射性、およびjumping classの消滅$J^q=J^{q+1}=0$と同値である。隣接する次数を同時に扱う点が重要となる。

### Brill–Noether locusによる捩れの排除（Theorem 1.3）

$\pi:M\to B$を平坦な複素解析空間の射、$E$を正則ベクトル束とする。$B$がCohen–Macaulayで、すべての$\max\{k-\dim B,0\}\le i\le k-1$について

$$
R^i\pi_*E=0,\qquad \operatorname{codim}\_B(BN\_\pi^i)\ge k-i+1
$$

ならば、$R^k\pi_*E$はtorsion-freeである。コホモロジーの跳びが起きる集合の余次元を、順像の代数的性質へ結びつける。

### Kähler三次元の族（Theorem 1.4）

相対コンパクトな滑らかな連結曲線上の$\mathbb Q$-factorial Kähler族で、ファイバーがコンパクト三次元多様体であるとする。中心ファイバー$X_0$がcanonical特異点をもてば、各$m\ge1$について$P_m(X_t)$は$0$の近くで一定となる。滑らかな射影族に限らず、特異点を許すKähler三次元へ範囲を広げる結果である。

### 最大Albanese次元の場合（Theorem 1.5）

同様の曲線上の滑らかなKähler族で、$X_0$が最大Albanese次元ならば、すべての$m\ge1$について$P_m(X_t)$は$0$の近くで一定となる。ここでは三次元という制限を置かず、Albanese写像が一般に有限となる幾何学的条件を用いる。既知のKodaira次元の不変性から、個々の多重種数の不変性へ進む。

### 対数的多重種数（Theorem 1.6）

同様の曲線上で$(X,B)$がlog smoothな滑らかな族を考える。中心対$(X_0,B_0)$は射影的かつcanonical、$\lfloor B\rfloor=0$、$K_{X_0}+B_0$はbigとし、Boucksom–Zariski分解の負部分が

$$
N(K_{X_0}+B_0)\wedge B_0=0
$$

を満たすと仮定する。ここで$\wedge$は共通の素因子表示で係数ごとの最小を取る記号である。このとき$0$の近傍$U$を選び、$mB$が整となるすべての$m\ge1$について$P_m(X_t,B_t)$を$U$上で一定にできる。log general typeだけでなく負部分と境界の条件も必要である。

### 高次コホモロジー的多重種数（Theorem 1.7）

同様の曲線上のコンパクトKähler多様体の滑らかな族で、全空間の標準束$K_X$が半正値、すなわち半正値Chern曲率をもつ滑らかなHermitian計量を備えるとする。このとき$P_m^{(q)}(X_t)$はすべての$m\ge1,q\ge0$について底全体で一定となる。仮定は全空間上の計量の存在であり、各ファイバーのnef性だけへ読み替えることはできない。

### Moishezon族の一般化多重種数（Theorem 1.8）

$f:X\to S$を同様の曲線上の連結ファイバーをもつproper Moishezon射とし、$(X,\mathbf M)$は$S$上でabundantなnef部分をもつ一般化対とする。

$$
K_{X_t}+M_t=(K_X+M_X)|_{X_t}
$$

で定まるすべてのファイバーがgeneralized canonicalならば、$mM_X$がCartierとなる各$m\ge1$について$h^0(X_t,\mathcal O_{X_t}(m(K_{X_t}+M_t)))$が一定となる。Li–Wangの射影族の結果をMoishezon族へ拡張する。

## 証明の見取り図

滑らかな曲線の局所環が離散付値環であることを使い、普遍係数定理と底変換の完全列によって、拡張の障害を高次順像の捩れとして捉える。Griffithsのjumping classの恒等式が残りの同値を与える。高次元の底では、Cohen–Macaulay性とBrill–Noether locusの余次元から正則列を作って捩れを排除する。

三次元では相対MMPを進め、良い極小モデルの場合は半豊富性とKollár型のtorsion-freenessを用いる。Moriファイバー空間などの場合は多重種数が消滅する。最大Albanese次元の場合は相対Albanese多様体上のMMPから始め、複素トーラスに有理曲線がないことを利用して底上の良い極小モデルへ移る。

対数的な場合は射影的な中心ファイバーのMMPを近傍へ拡張し、消滅定理とコホモロジー判定を組み合わせる。高次コホモロジーでは既存の拡張定理を用いる。Moishezon族ではabundantなnef部分から局所的な補助射影モデルを作ることが新しい入力であり、そこで構成した特異計量を一般化多重標準切断の拡張へつなげる。

## 原論文との対応

- **Abstractページ:** [Aspects of deformation invariance of plurigenera of Kähler varieties](https://arxiv.org/abs/2610.17817)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.17817v1) — Section 1, pp. 1–5（Section 2の開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.2–1.8; Conjecture 1.1は未解決問題として区別
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.17817v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
